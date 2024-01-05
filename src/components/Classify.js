"use client";

import React, {useState} from 'react';
import "../styles/classify.scss";


const Classify = (props) => {
    const [newID] = useState('_sort=id&_order=desc');
    const [ratingStart] = useState('_sort=rating&_order=desc');
    const max = "R$ ⬆ đến ⬇";
    const min = "R$ ⬇ đến ⬆";
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
    const News = () => {
        props.new(newID);
    }
    const Rating = () => {
        props.rating(ratingStart);
    }
    return (
        <div className='Classify'>
            <button onClick={() => News()}>Mới nhất</button>
            <button onClick={() => Rating()}>Phổ biến</button>
            <button onClick={() => totalMain()}>{title}</button>
        </div>
    );
};

export default Classify;