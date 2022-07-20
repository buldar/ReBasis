import React, {useEffect, useState} from "react";
import './AnalogClock.css'

type PropsType = {
    mode: 'digital' | 'analog'
}


export const Clock = (props: PropsType) => {
    let currentTime = new Date()
    let [date, setDate] = useState(currentTime)

    useEffect(() => {
        setInterval(() => {
            setDate(state => state = new Date())
        }, 1000)
    }, [])

    if (props.mode === 'digital') {
        return <DigitalClock date={date}/>
    } else {
        return <AnalogClock date={date}/>
    }
}

type ClockType = {
    date:Date
}

export const DigitalClock = (props:ClockType) => {
    return <>
        {props.date.getHours() < 10 ? '0' + props.date.getHours() : props.date.getHours()}:
        {props.date.getMinutes() < 10 ? '0' + props.date.getMinutes() : props.date.getMinutes()}:
        {props.date.getSeconds() < 10 ? '0' + props.date.getSeconds() : props.date.getSeconds()}
    </>
}
export const AnalogClock = (props:ClockType) => {

    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };

    return <>
        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle} />
                <div className={"dial minutes"} style={minutesStyle} />
                <div className={"dial hours"} style={hoursStyle} />
            </div>
        </div>
    </>
}