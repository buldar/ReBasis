import React from "react";
import {action} from "@storybook/addon-actions";
import {HandmadeSelect} from "./HandmadeSelect";


export default {
    title: 'HandmadeSelect',
    component: HandmadeSelect
};

const items = [
    {title:'Minsk', value:1 },
    {title:'Dnepr', value:2 },
    {title:'Krakow', value:3 }
]

const callback = action('selected')

export const StandardSelect = () => <HandmadeSelect
    value={'Hello'}
    items={items}/>

