import React, {useRef, useState} from 'react';


export default {
    title: 'Input',
};


export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    const [value,setValue]=useState('will change with input')
    return <><input onChange={(e)=>{setValue(e.currentTarget.value)}}/> {value}</>
}

export const GetValueOfUncontrolledInputByPressButton = () => {
    const [value,setValue]=useState('will change on press "Save"')
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        let el =inputRef.current as HTMLInputElement
        setValue(el.value)}

    return <><input  ref={inputRef}/><button onClick={save}>save</button> {value}</>
}

export const ControlledInput = () => <input value={'I am controlled'} />