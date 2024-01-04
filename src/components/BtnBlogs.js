"use client";

import React, {useState, useEffect} from 'react';
import "../styles/btnbutton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const BtnBlogs = (props) => {
    const [one, setOne] = useState(1);
    const [two, setTwo] = useState(2);
    const [three, setThree] = useState(3)
    const [four, setFour] = useState(4);
    const [max, setMax] = useState(0);
    const [active, setActive] = useState(1);
    const next = () => {
        setOne(one+1);
        setTwo(two+1);
        setThree(three+1);
        setFour(four+1);
        setActive(active+1);
        props.numberPage(active+1);
    }
    const pre = () => {
        if(one === 1){
            setOne(1);
            setTwo(2);
            setThree(3);
            setFour(4);
            setActive(1);
        }else{
            setOne(one-1);
            setTwo(two-1);
            setThree(three-1);
            setFour(four-1);
            setActive(active-1);
            props.numberPage(active-1);
        }
    }
    const upMin = () => {
        setOne(1);
        setTwo(2);
        setThree(3);
        setFour(4);
        setActive(1);
        props.numberPage(1);
    }
    const upMax = () => {
        setOne(max-3);
        setTwo(max-2);
        setThree(max-1);
        setFour(max);
        setActive(max);
        props.numberPage(max);
    }
    const onePage = () => {
        setActive(one);
        props.numberPage(one);
    }
    const twoPage = () => {
        setActive(two);
        props.numberPage(two);
    }
    const threePage = () => {
        setActive(three);
        props.numberPage(three);
    }
    const fourPage = () => {
        setActive(four);
        props.numberPage(four);
    }
    useEffect(() => {
        axios.get(`http://localhost:4000/blog?keyword=${sessionStorage.user}`).then((res) => {
            if(res && res.data && res.data.data && res.data.data.totalPages){
                const numberMax = res.data.data.totalPages
                setMax(numberMax);
            }
        });
    })
    return (
        <div className='BtnListProduct'>
            <button style={{
                display: one === 1 || max === 1 ? "none" : 'block'
            }}
            onClick={() => upMin()}
            ><FontAwesomeIcon icon={faAngleLeft}/><FontAwesomeIcon icon={faAngleLeft}/></button>

            <button style={{
                display: one === 1 || max === 1 ? "none" : 'block'
            }}
            onClick={() => pre()}
            ><FontAwesomeIcon icon={faAngleLeft}/></button>

            <button className={one === active ? "activeBtn" : ""}
            style={{ display: max === 1 ? "none" : 'block'}}
            onClick={() => onePage()}>{one}</button>

            <button className={two === active ? "activeBtn" : ""} 
            style={{ display: max === 1 ? "none" : 'block'}}
            onClick={() => twoPage()}>{two}</button>

            <button className={three === active  ? "activeBtn" : ""} 
            style={{ display: max === 1 || max === 2 ? "none" : 'block'}}
            onClick={() => threePage()}>{three}</button>

            <button className={four === active ? "activeBtn" : ""}
            style={{ display: max === 1 || max === 3 || max === 2 ? "none" : 'block'}}
            onClick={() => fourPage()}>{four}</button>

            <button style={{
                display: four === max || max === 1 || max === 3 || max === 2 ? "none" : 'block'
            }} onClick={() => next()}><FontAwesomeIcon icon={faAngleRight}/></button>

            <button style={{
                display: four === max || max === 1 || max === 3 || max === 2 ? "none" : 'block'
            }}
            onClick={() => upMax()}
            ><FontAwesomeIcon icon={faAngleRight}/><FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
    );
};

export default BtnBlogs;