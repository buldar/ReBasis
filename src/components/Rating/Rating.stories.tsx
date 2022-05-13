import React, {useState} from 'react';
import {Rating} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating',
    component: Rating,
};

const callback = action('star value')

export const EmptyRating = () => <Rating value={0} onClick={callback}/>
export const Rating1 = () => <Rating value={1} onClick={x => x}/>
export const Rating2 = () => <Rating value={2} onClick={x => x}/>
export const Rating3 = () => <Rating value={3} onClick={x => x}/>
export const Rating4 = () => <Rating value={4} onClick={x => x}/>
export const Rating5 = () => <Rating value={5} onClick={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<0|1|2|3|4|5>(0)
    return <Rating value={rating} onClick={setRating}/>
}
