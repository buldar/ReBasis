import React from "react";

type PropsType = {
    title:string
    onClick:()=>void
}

export function AccordionTitle(props:PropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}