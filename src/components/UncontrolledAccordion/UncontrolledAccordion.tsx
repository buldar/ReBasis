import React, {useReducer} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {reducer} from "./reducer";

type PropsType = {
    title: string,
}

export function UncontrolledAccordion(props: PropsType) {

    let [state, dispatch] = useReducer(reducer,{collapsed:false})

            return (
            <div>
                <UncontrolledAccordionTitle
                    title={props.title}
                    setCollapsed={()=>{dispatch({type:'COLLAPSE'})}}/>
                {!state.collapsed && <AccordionBody/>}

            </div>
        )

}

