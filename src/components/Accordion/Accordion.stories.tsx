import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {OnOff} from "../OnOff/OnOff";


export default {
    title: 'Accordion',
    component: Accordion,
};

let items = [
    {title:'One', value:'1'},
    {title:'Two', value:'2'},
    {title:'Three', value:'3'}
]

const callback = action('Get un/collapsed')
const onClickItemCallback = action('Item was clicked')

export const AccordionCollapsed = () =>
    <Accordion title={'Collapsed'}
               collapsed={true}
               onChange={callback}
               items={[]}
               onClick={onClickItemCallback}/>
export const AccordionNotCollapsed = () =>
    <Accordion title={'NotCollapsed'}
               collapsed={false}
               onChange={callback}
               items={items}
               onClick={onClickItemCallback}/>

export const ModeChanging = () => {
    const [collapse, setCollapse]=useState<boolean>(true)
    return <Accordion title={'Test3'}
                      collapsed={collapse}
                      onChange={()=>{setCollapse(!collapse)}}
                      items={items}
                      onClick={onClickItemCallback}/>
}

