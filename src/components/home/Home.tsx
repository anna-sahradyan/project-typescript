import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, TextField} from "material-ui-core";
import {optionType} from "../../types";

const Home = (): JSX.Element => {
    const [term, setTerm] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
//?getSearchOption
    const getSearchOption =   (value: string) => {
        if (!value) {
            setOptions([]);
            return;
        }
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_API_KEY}`)
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=${process.env.REACT_API_KEY}
`).then((res) => res.json())
            .then((data) => console.log({data}))
    }

    //?Submit
    const onSubmit = (e:any) => {
        e.preventDefault()
        if (!city) return
        getForecast(city)

    }
    useEffect(() => {
        if (city) {
            setTerm(city.name)
            setOptions([])
        }

    }, [city])
    return (
        <>
            <section className={"flex justify-center items-center  mt-28 opacity-50 "}>
                <div className={"bg-white  w-[470px] h-[450px] "}>
                    <h1 className={" flex justify-center items-center w-[85%] h-[28px] bg-blue-100  text-lg m-auto mt-2 rounded-md"}>Weather &nbsp;
                        <b className={"text-2xl text-black "}>Forecast</b></h1>
                    <h5 className={" flex justify-center text-center w-[80%] h-auto bg-blue-100   text-sm m-auto mt-2 rounded-md "}>Enter
                        below a place you want to know the weather of and
                        select an option from dropdown</h5>
                    <div className="relative flex mt-10 h-[50px] md:mt-4 w-full ">

                        <div className={"m-auto "}

                        >
                            <TextField
                                className=" h-full"
                                label="Weather"
                                id="size-small"
                                defaultValue={term}
                                size="small"
                                variant="filled"
                                onChange={onInputChange}
                            />
                            <ul className={"  absolute top-14  rounded-l-md  w-full "}>
                                {options?.map((option: optionType, index: number) =>
                                    <li className={"flex flex justify-between border-y-2 "}
                                        key={`${option}_${index}`}>{option.name}
                                        <button className={" text-sm w-[50%] hover:bg-zinc-700"}
                                                onClick={() => onOptionSelect(option)}>
                                            {option.name}
                                        </button>
                                    </li>)}

                            </ul>
                            <Button
                                className=" flex  mx-auto cursor-pointer w-36 "
                                size={"large"}
                                color={"primary"}
                             onClick={onSubmit}>
                                search
                            </Button>

                        </div>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;