import React from "react";

type PropsType = {
    title:string
    onChange:()=>void
}

export function AccordionTitle(props:PropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}