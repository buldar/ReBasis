import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

//function declaration
const App = () => {
    //do something useful

    let [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(true);

    //must return JSX
    return (
        <div className='App'>
            <PageTitle title={'This is first page'}/>
            <OnOff on={on}
                   setOn={setOn}
            />
            {/*<UncontrolledAccordion title={'---TITLE---'}/>*/}
            <Accordion
                onClick={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
                title={'Menu'}
                collapsed={accordionCollapsed}
            />
            Article 1
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
            {/*Article 3*/}
            {/*<UncontrolledRating />*/}
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