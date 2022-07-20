import React, {useEffect} from "react";
import {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'useEffect demo'
}



export const DigitalClock = () => {
    return (
        <Clock mode={'digital'}/>
    )
}

export const AnalogClock = () => {
    return (
        <Clock mode={'analog'}/>
    )
}