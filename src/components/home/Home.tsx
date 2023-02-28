import React from 'react';
import {TextField} from "material-ui-core";


const Home = (): JSX.Element => {
    return (
        <>
            <div className={"flex justify-center items-center  mt-28 opacity-50 "}>
                <div className={"bg-white  w-[470px] h-[450px] "}>
                    <h1 className={" flex justify-center items-center w-[80%] h-[28px] bg-blue-600  text-lg m-auto mt-2 rounded-md"}>Weather &nbsp;
                        <b className={"text-2xl text-black "}>Forecast</b></h1>
                    <h5 className={" flex justify-center items-center w-[70%] h-[25px] bg-blue-600  text-sm m-auto mt-2 rounded-md "}>Enter
                        below a place you want to know the</h5>
                    <h5 className={" flex justify-center items-center w-[90%] h-[30px] text-sm m-auto  "}>weather of and
                        select an option from dropdown</h5>
                    <TextField />
                </div>

            </div>
        </>
    );
};

export default Home;