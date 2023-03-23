import {ChangeEvent, useEffect, useState} from "react";
import {optionType, forecastType} from "../../types";

const useForecast = () => {
    const [term, setTerm] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [forecast, setForecast] = useState<forecastType | null>(null)
//?getSearchOption
    const getSearchOption = (value: string) => {
        if (!value) {
            setOptions([]);
            return;
        }
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=e0ae8e1697d4a43091c5705897ab0298`)
            .then((res) => res.json())
            .then((data) => setOptions(data))

    }

//?OnInputChange
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setTerm(value);
        getSearchOption(value);
        if (value === "") return

    }
    //?OnOptionSelect
    const onOptionSelect = (option: optionType) => {
        setCity(option)

    }
    //?getForecast
    const getForecast = (city: optionType) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=e0ae8e1697d4a43091c5705897ab0298
`).then((res) => res.json())
            .then((data) => {
                const forecastData = {
                    ...data.city,
                    list: data.list.slice(0, 16),
                }
                setForecast(forecastData)
            })
    }

    //?Submit
    const onSubmit = () => {
        if (!city) return
        getForecast(city)

    }
    useEffect(() => {
        if (city) {
            setTerm(city.name)
            setOptions([])
        }

    }, [city])
    return {
        forecast,
        options,
        term,
        onOptionSelect,
        onSubmit,
        onInputChange,
    }
}


export default useForecast;