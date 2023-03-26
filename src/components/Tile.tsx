import React from 'react';
import Wind from "../icons/Wind";
import humidity from "../icons/Humidity";
import visibility from "../icons/Visibility";
import pressure from "../icons/Pressure";
import Humidity from "../icons/Humidity";
import Feels from "../icons/Feels";
import Visibility from "../icons/Visibility";
import Pressure from "../icons/Pressure";
import Pop from "../icons/Pop";

type Props = {
    icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop"
    title: string
    info: string | JSX.Element
    description: string
}
const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
}

const Tile = ({icon, title, info, description}: Props): JSX.Element => {
    const Icon = icons[icon];
    return (
        <article className={"w-[140px] text-xs font-bold flex flex-col items-center  drop-shadow-lg py-2 mb-5 bg-black/20 backdrop-blur-lg rounded drop-shadow-lg "}>
            <div className="flex items-center text-sm font-bold">
            <Icon/><h4 className="ml-1">{title}</h4>
            </div>
            <h3 className="mt-2 text-lg">{info}</h3>
            <p className="text-sm font-bold">{description}</p>
        </article>
    );
};

export default Tile;