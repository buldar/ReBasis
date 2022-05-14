import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type ItemType = {
    title:string
    value:any
}

type PropsType = {
    title: string,
    collapsed: boolean
    onChange:()=>void
    items: Array<ItemType>
    onClick:(value:any)=>void

}

export function Accordion(props: PropsType) {
            return (
            <div>
                <AccordionTitle
                    onChange={()=>{props.onChange()}}
                    title={props.title}
                />
                {!props.collapsed
                && <AccordionBody items={props.items}
                                  onClick={props.onClick}/>}

            </div>
        )

}

