import React from 'react';
import Search from "../Search/Search";
import useForecast from "../hooks/useForecast";
import Forecast from "../Forecast";

const Home = (): JSX.Element => {
    const {forecast, options, term, onOptionSelect, onSubmit, onInputChange} =
        useForecast()//call the hook
    return (
        <>
            {forecast ? (
                <Forecast data={forecast}/>
            ) : (<Search options={options} term={term} onInputChange={onInputChange} onSubmit={onSubmit}
                         onOptionSelect={onOptionSelect}/>)}

        </>
    );
};

export default Home;