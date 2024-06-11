"use client";

import React from 'react';
import "../styles/classify.scss";


const Classify = (props) => {
    const Rating = (temp) => {
        if(temp === true){
            props.rating('_sort=rating&_order=desc');
        }else{
            props.rating('_sort=rating&_order=asc');
        }
    }
    return (
        <div className='Classify'>
            <button onClick={() => Rating(true)}>⬆ - ⬇</button>
            <button onClick={() => Rating(false)}>⬇ - ⬆</button>
        </div>
    );
};

export default Classify;