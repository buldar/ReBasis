import React from "react";

type ItemType = {
    title:string
    value:any
}

type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}

export function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item,index)=>
                <li onClick={()=>{props.onClick(item.value)}} key={index}>{item.title}</li>)}
        </ul>
    )
}