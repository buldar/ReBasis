import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input',
};


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('will change with input')
    return <><input onChange={(e) => {
        debugger;
        setValue(e.currentTarget.value)
    }}/> {value}</>
}

export const GetValueOfUncontrolledInputByPressButton = () => {
    const [value, setValue] = useState('will change on press "Save"')
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        {value}</>
}

export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string|undefined>('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Dnepr</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'I am controlled'}/>