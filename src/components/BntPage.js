"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "../styles/btnpage.scss";
import axios from 'axios';
import { printfID } from '@/utils/ViewURL';

const BntPage = (props) => {
    const [pageOne, setPageOne] = useState(1);
    const [pageTwo, setPageTwo] = useState(2);
    const [pageThree, setPageThree] = useState(3);
    const [number, setNumber] = useState()
    const setDownPage = (page) => {
        if(pageOne === 1){
            setPageOne(1);
            setPageTwo(2);
            setPageThree(3);
        }else{
            setPageOne(pageOne - 1);
            setPageTwo(pageTwo - 1);
            setPageThree(pageThree - 1);
            props.numberPage(page -1)
        }
    }
    const setOne = (page) => {
        setPageOne(pageOne + 1);
        setPageTwo(pageTwo + 1);
        setPageThree(pageThree + 1);
        props.numberPage(page)
    }
    const setTwo = (page) => {
        setPageOne(pageOne + 2);
        setPageTwo(pageTwo + 2);
        setPageThree(pageThree + 2);
        props.numberPage(page)
    }
    const setUpPage = (page) => {
        setPageOne(pageOne + 1);
        setPageTwo(pageTwo + 1);
        setPageThree(pageThree + 1);
        props.numberPage(page + 1)
    }
    useEffect(() => {
        const id = printfID(props.id);
        axios.get(`https://zfakeapi.vercel.app/comment?productId=${id}`).then((res) => {
            const number = res.data.length/9;
            setNumber(Math.ceil(number));
        });
    })
    return (
        <div className='BntPage'>
            <button style={{opacity: pageOne === 1 ? 0 : 1, cursor: pageOne === 1 ? "default" : "pointer"}} onClick={() => setDownPage(pageOne)}><FontAwesomeIcon icon={faAngleLeft}/></button>
            <button >{pageOne}</button>
            {pageTwo <= number &&
                <button onClick={() => setOne(pageTwo)}>{pageTwo}</button>
            }
            {pageTwo < number &&
                <button onClick={() => setTwo(pageThree)}>{pageThree}</button>
            }
            {pageTwo < number &&
                <button onClick={() => setUpPage(pageOne)}><FontAwesomeIcon icon={faAngleRight}/></button>
            }
        </div>
    );
};

export default BntPage;