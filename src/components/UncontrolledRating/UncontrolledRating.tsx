import React, {useState} from "react";
import './UncontrolledRating.css'



type StarType = {
    selected:boolean
    setValue:()=>void
}

type RatingPropsType = {
    defaultValue:number
    onClick:(val:number)=>void

}


export function UncontrolledRating(props:RatingPropsType) {

    let [value, setValue] = useState(props.defaultValue)

    return (
        <div className='star'>
            <Star selected={value > 0} setValue={()=>{setValue(1); props.onClick(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2); props.onClick(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3); props.onClick(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4); props.onClick(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5); props.onClick(5)}}/>
        </div>
    )

}

function Star(props: StarType) {
    return (
        <span onClick={props.setValue}>{props.selected? <b className='sel'>*</b> : '*'} </span>
    )

}