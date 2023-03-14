import React, {ChangeEvent, useState} from 'react';
import {Button, TextField} from "material-ui-core";
import Box from '@mui/material/Box';

const Home = (): JSX.Element => {
    const [term, setTerm] = useState("");
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
       console.log(e.target.value)
    }
    /*
    * http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}*/
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

                        <Box className={"m-auto "}
                             component="form"

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


                            <Button
                                className=" flex  mx-auto cursor-pointer w-36 "
                                size={"large"}
                                color={"primary"}
                            >
                                search
                            </Button>

                        </Box>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;