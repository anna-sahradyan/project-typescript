import React from 'react';
import {forecastType} from "../types/index";

type Props = {
    data: forecastType
}
const Forecast = ({data}: Props): JSX.Element => {
    return (
        <>
            <section className={"flex justify-center items-center  mt-28 opacity-50 "}>
                <div className={"bg-white  w-[470px] h-[450px] "}>
                    <section className={"text-center"}>
                        <h2 className={"text-2xl font-black"}>{data.country}</h2>

                    </section>
                </div>
            </section>
        </>
    );
};

export default Forecast;