import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {MyHandmadeSelect} from "./MyHandmadeSelect";
import {SelectFromLesson} from "./SelectFromLesson";


export default {
    title: 'HandmadeSelect',
    component: MyHandmadeSelect
};

const items = [
    {title: 'Minsk', value: 1},
    {title: 'Dnipro', value: 2},
    {title: 'Krakow', value: 3}
]

const callback = action('selected')

export const StandardSelect = () => <MyHandmadeSelect
    onChange={action('changed')}
    value={'Hello'}
    items={items}/>

export const SelectWithValue = () => {
    let [value, setValue]=useState(2)
    return (
        <SelectFromLesson
            onChange={setValue}
            items={items}
            value={value}/>
    )
}
export const SelectWithoutValue = () => {
    let [value, setValue]=useState(null)
    return (<SelectFromLesson
        onChange={setValue}
        items={items}
        value={value}/>)
}
