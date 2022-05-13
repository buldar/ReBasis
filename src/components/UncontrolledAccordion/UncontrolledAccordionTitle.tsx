import React from "react";

type PropsType = {
    title:string
    setCollapsed:()=>void
}

export function UncontrolledAccordionTitle(props:PropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}