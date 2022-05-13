import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type PropsType = {
    title: string,
    collapsed: boolean
    onClick:()=>void
}

export function Accordion(props: PropsType) {
            return (
            <div>
                <AccordionTitle
                    onClick={()=>{props.onClick()}}
                    title={props.title}
                />
                {!props.collapsed && <AccordionBody/>}

            </div>
        )

}

