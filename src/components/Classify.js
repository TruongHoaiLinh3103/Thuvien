"use client";

import React, {useState} from 'react';
import "../styles/classify.scss";


const Classify = (props) => {
    const [ratingStart] = useState('_sort=rating&_order=desc');
    const max = "R$ ⬆ to ⬇";
    const min = "R$ ⬇ to ⬆";
    const [title, setTitle] = useState(max);
    const totalMain = () => {
        if(title === max){
            setTitle(min);
            props.totalPage("_sort=price&_order=desc")
        }else{
            setTitle(max);
            props.totalPage("_sort=price&_order=asc")
        }
    }
    const Rating = () => {
        props.rating(ratingStart);
    }
    return (
        <div className='Classify'>
            <button onClick={() => Rating()}>Appreciate</button>
            <button onClick={() => totalMain()}>{title}</button>
        </div>
    );
};

export default Classify;