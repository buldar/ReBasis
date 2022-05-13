import React, {useState} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {AccordionBody} from "./AccordionBody";

type PropsType = {
    title: string,
}

export function UncontrolledAccordion(props: PropsType) {

    let [collapsed, setCollapsed] = useState(false)

            return (
            <div>
                <UncontrolledAccordionTitle
                    title={props.title}
                    setCollapsed={()=>{setCollapsed(!collapsed)}}/>
                {!collapsed && <AccordionBody/>}

            </div>
        )

}

