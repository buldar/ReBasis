import React, {useState} from "react";

type ItemType = {
    title:string
    value:any
}

type HandmadeSelectPropsType = {
    value: any
    // onChange:(value:any)=>void
    items:ItemType[]
}

export const HandmadeSelect = (props:HandmadeSelectPropsType) => {

    let [value, setValue] = useState('Choose city')
    let [mode, setMode] = useState<boolean>(false)

    const choose = (value:any) => {
        setValue(value)
        setMode(false)
    }
    const changeMode = () => {
        setMode(!mode)
    }

    return (
        <div style={{border:'1px blue solid', width:'100px'}}>
            <div onClick={changeMode}>
                {value}
            </div>
            {mode && props.items.map(i=><div onClick={()=>{choose(i.title)}}>{i.title}</div>)}
        </div>
    )
}