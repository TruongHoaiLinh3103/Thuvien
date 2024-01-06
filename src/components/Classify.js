"use client";

import React, {useState} from 'react';
import "../styles/classify.scss";
import { usePathname } from 'next/navigation';


const Classify = (props) => {
    const [ratingStart] = useState('&_sort=rating&_order=desc');
    const [modal, setModal] = useState(false);
    const [tagOne, setTagOne] = useState('');
    const [tagTwo, setTagTwo] = useState('');
    const [tagThree, setTagThree] = useState('');
    const pathname = usePathname();
    const max = "R$ ⬆ to ⬇";
    const min = "R$ ⬇ to ⬆";
    const [title, setTitle] = useState(max);
    const totalMain = () => {
        if(title === max){
            setTitle(min);
            props.totalPage("&_sort=price&_order=desc")
        }else{
            setTitle(max);
            props.totalPage("&_sort=price&_order=asc")
        }
    }
    const Rating = () => {
        props.rating(ratingStart);
    }
    const openFilterComic = () => {
        setModal(!modal);
        setTagOne("Infinite");
        setTagTwo("Ghost");
        setTagThree("Other");
    }
    const openFilterWebsite = () => {
        setModal(!modal);
        setTagOne("Layout");
        setTagTwo("Function");
        setTagThree("Archive");
    }
    const openFilterCooking = () => {
        setModal(!modal);
        setTagOne("Grill");
        setTagTwo("Soup");
        setTagThree("Stir-fry");
    }
    return (
        <div className='Classify'>
            {pathname === "/product/comic" &&
                <button onClick={() => openFilterComic()}>Filter</button>
            }
            {pathname === "/product/website" &&
                <button onClick={() => openFilterWebsite()}>Filter</button>
            }
            {pathname === "/product/cooking" &&
                <button onClick={() => openFilterCooking()}>Filter</button>
            }
            <button onClick={() => Rating()}>Appreciate</button>
            <button onClick={() => totalMain()}>{title}</button>
            <ul className='Classify-tag' style={{display: modal ? "flex" : "none"}}>
                <li onClick={() => {props.new(`&tag=${tagOne}&tag=${tagOne}%20${tagTwo}&tag=${tagOne}%20${tagThree}&tag=${tagTwo}%20${tagOne}&tag=${tagThree}%20${tagOne}&_sort=id&_order=desc`); setModal(!modal);}}>{tagOne}</li>
                <li onClick={() => {props.new(`&tag=${tagTwo}&tag=${tagThree}%20${tagTwo}&tag=${tagOne}%20${tagTwo}&tag=${tagTwo}%20${tagThree}&tag=${tagTwo}%20${tagOne}&_sort=id&_order=desc`); setModal(!modal);}}>{tagTwo}</li>
                <li onClick={() => {props.new(`&tag=${tagThree}&tag=${tagThree}%20${tagTwo}&tag=${tagOne}%20${tagThree}&tag=${tagTwo}%20${tagThree}&tag=${tagThree}%20${tagOne}&_sort=id&_order=desc`); setModal(!modal);}}>{tagThree}</li>
            </ul>
        </div>
    );
};

export default Classify;