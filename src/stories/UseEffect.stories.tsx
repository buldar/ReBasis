import React, {useEffect} from "react";
import {useState} from "react";

export default {
    title: 'useEffect demo'
}



export const Timer = () => {
    let currentTime = new Date()

    let [date, setDate] = useState(currentTime)

    useEffect(()=>{
        setInterval(()=>{
            setDate(state=>state=new Date())
        }, 1000)
    },[])


    return <>
    {date.getHours()<9?'0'+date.getHours():date.getHours()}:
    {date.getMinutes()<9?'0'+date.getMinutes():date.getMinutes()}:
    {date.getSeconds()<9?'0'+date.getSeconds():date.getSeconds()}
    </>
}