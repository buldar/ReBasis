import React from "react";

type RatingValueType = {
    value:0|1|2|3|4|5
}

export type RatingType = {
    value: 0|1|2|3|4|5
    onClick: (value:0|1|2|3|4|5)=>void
}

type StarType = {
    selected:boolean
    onClick: ()=>void
}

export function Rating(props: RatingType) {
    return (
        <div>
            <Star onClick={()=>{props.onClick(1)}} selected={props.value > 0 }/>
            <Star onClick={()=>{props.onClick(2)}} selected={props.value > 1 }/>
            <Star onClick={()=>{props.onClick(3)}} selected={props.value > 2 }/>
            <Star onClick={()=>{props.onClick(4)}} selected={props.value > 3 }/>
            <Star onClick={()=>{props.onClick(5)}} selected={props.value > 4 }/>
        </div>
    )

}

function Star(props: StarType) {
    return (
        <span onClick={props.onClick} >{props.selected? <b>O</b> : 'O'} </span>
    )

}