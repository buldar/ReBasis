import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('On or Off clicked')


export const OnTrue = () => <OnOff on={true} setOn={callback}/>
export const OnFalse = () => <OnOff on={false} setOn={callback}/>

export const ModeChanging = () => {
    const [mode, setMode]=useState<boolean>(true)
    return <OnOff on={mode} setOn={setMode}/>
}
