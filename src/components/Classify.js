"use client";

import React, {useState} from 'react';
import "../styles/classify.scss";


const Classify = (props) => {
    const max = "R$ ⬆ đến ⬇";
    const min = "R$ ⬇ đến ⬆";
    const [title, setTitle] = useState(max);
    const totalMain = () => {
        if(title === max){
            setTitle(min);
            props.totalPage("desc")
        }else{
            setTitle(max);
            props.totalPage("asc")
        }
    }
    const News = () => {
        props.new("desc")
    }
    const Rating = () => {
        props.rating("desc")
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