import React, {useState, KeyboardEvent} from "react";
import style from './Select.module.css'

type ItemType = {
    title: any
    value: any
}

type HandmadeSelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectFromLesson = (props: HandmadeSelectPropsType) => {
    let [active, setActive] = useState(false)
    let [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    const showItems = () => setActive(!active)

    const onItemClick = (value: number) => {
        props.onChange(value)
        setActive(!active)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length - 1; i++) {
                if (hoveredElement === props.items[i].value) {
                    setHoveredElement(props.items[i + 1].value)
                    break
                }
            }
        } else if (e.key === 'ArrowUp') {
            for (let i = 1; i < props.items.length; i++) {
                if (hoveredElement === props.items[i].value) {
                    setHoveredElement(props.items[i-1].value)
                    break
                }
            }
        }
    }

    return (
        <div className={style.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={style.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={style.items}>
                {props.items.map(i => <div
                    onMouseEnter={() => {
                        setHoveredElement(i.value)
                    }}
                    className={style.item + ' ' + (hoveredItem === i ? style.selected : '')}
                    key={i.value}
                    onClick={() => {
                        onItemClick(i.value)
                    }}
                >{i.title}
                </div>)}
            </div>
            }
        </div>
    )
}