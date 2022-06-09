import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

const App = () => {

    let [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(true);

    let items = [
        {title:'One', value:'1'},
        {title:'Two', value:'2'},
        {title:'Three', value:'3'}
    ]

    return (
        <div className='App'>
            <UncontrolledAccordion title={'UncontrolledAccordion'}/>
            {/*<PageTitle title={'This is first page'}/>*/}
            {/*<OnOff on={on}*/}
            {/*       setOn={setOn}*/}
            {/*/>*/}
            {/*<Accordion*/}
            {/*    onChange={() => {*/}
            {/*        setAccordionCollapsed(!accordionCollapsed)*/}
            {/*    }}*/}
            {/*    title={'Menu'}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    items={items}*/}
            {/*    onClick={(item) =>{console.log(`Item with ID ${item} was clicked`)}}*/}
            {/*/>*/}
            {/*Article 1*/}
            {/*<Rating*/}
            {/*    value={ratingValue}*/}
            {/*    onClick={setRatingValue}*/}
            {/*/>*/}
        </div>
    );
}

type PropsType = {
    title: string
}

function PageTitle(props: PropsType) {
    return (
        <><h1>{props.title}</h1></>
    )
}


export default App