import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {OnOff} from "../OnOff/OnOff";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('Get un/collapsed')

export const AccordionCollapsed = () => <Accordion title={'Collapsed'} collapsed={true} onClick={callback}/>
export const AccordionNotCollapsed = () => <Accordion title={'NotCollapsed'} collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
    const [collapse, setCollapse]=useState<boolean>(true)
    return <Accordion title={'Test3'} collapsed={collapse} onClick={()=>{setCollapse(!collapse)}}/>
}

