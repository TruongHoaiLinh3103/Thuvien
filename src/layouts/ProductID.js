"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../styles/productid.scss";
import { useRouter } from 'next/navigation';
import SliderBanner from './SliderBanner';
import { printfID } from '@/utils/ViewURL';

const ProductID = (props) => {
    const [data, setData] = useState({});
    const [pageOne, setPageOne] = useState(1);
    const [pageTwo, setPageTwo] = useState(2);
    const [pageThree, setPageThree] = useState(3);
    const router = useRouter();
    const setDownPage = () => {
        if(pageOne === 1){
            setPageOne(1);
            setPageTwo(2);
            setPageThree(3);
        }else{
            setPageOne(pageOne - 1);
            setPageTwo(pageTwo - 1);
            setPageThree(pageThree - 1);
        }
    }
    const setOne = () => {
        setPageOne(pageOne + 1);
        setPageTwo(pageTwo + 1);
        setPageThree(pageThree + 1);
    }
    const setTwo = () => {
        setPageOne(pageOne + 2);
        setPageTwo(pageTwo + 2);
        setPageThree(pageThree + 2);
    }
    const setUpPage = () => {
        setPageOne(pageOne + 1);
        setPageTwo(pageTwo + 1);
        setPageThree(pageThree + 1);
    }
    const handleRating = (rating) => {
        let htmlToReturn = "";
        const maximumRatingStars = 5;
        
        for (let i = 0; i < rating; i++) {
            htmlToReturn += "⭐";
        }
        
        for (let j = 0; j < maximumRatingStars - rating; j++) {
            htmlToReturn += " ✩";
        }
        
        return htmlToReturn;
    }
    const handlePrice = (price, discount = false) => {
        if (discount) {
            price = price * 0.9;
            // price *= 0.9;
        }
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    useEffect(() => {
        const id = printfID(props.id);
        axios.get(`https://zfakeapi.vercel.app/product/${id}`).then((res) => {
            setData(res.data)
        });
    },[])
    const Data = Object.keys(data).length === 0
    return (
        <div>
            {!Data && 
                <div className='ProductID'>
                    <div className='ProductID-title'>
                        <FontAwesomeIcon icon={faAngleLeft} onClick={() => router.push("/")}/>
                        <h3>{data.name}</h3>
                    </div>
                    <div className='ProductID-detail'>
                        <div className='Product-detai-img'>
                            <SliderBanner id={data.id}/>
                            <div className='Product-detai-img_other'>
                                <div>
                                    <img src={data.imgOne} alt={data.name} />
                                </div>
                                <div>
                                    <img src={data.imgTwo} alt={data.name} />
                                </div>
                                <div>
                                    <img src={data.imgThree} alt={data.name} />
                                </div>
                            </div>
                            <h3>{data.name}</h3>
                            <div className="ProductID-detail_name_rating">
                                {handleRating(data.rating)}
                            </div>
                            <div className="ProductID-detail_name_price">
                                <h5>{handlePrice(data.price)}</h5>
                                <h5>{handlePrice(data.price, true)}</h5>
                            </div>
                            <div className='ProductID-detail_name-btn'>
                                <button><FontAwesomeIcon icon={faHeart} /></button>
                                <button><FontAwesomeIcon icon={faCartShopping} /></button>
                            </div>
                        </div>
                        <div className='ProductID-cmt'>
                            <nav>
                                <h3>Mô tả</h3>
                            </nav>
                            <div className='ProductID-des-box'>
                                
                            </div>
                        </div>
                        <div className='ProductID-cmt'>
                            <nav>
                                <h3>Bình luận</h3>
                            </nav>
                            <div className='ProductID-cmt-box'>
                                
                            </div>
                            <div className='ProductID-cmt_page'>
                                <button style={{opacity: pageOne === 1 ? 0 : 1, cursor: pageOne === 1 ? "default" : "pointer"}} onClick={() => setDownPage()}><FontAwesomeIcon icon={faAngleLeft}/></button>
                                <button >{pageOne}</button>
                                <button onClick={() => setOne()}>{pageTwo}</button>
                                <button onClick={() => setTwo()}>{pageThree}</button>
                                <button onClick={() => setUpPage()}><FontAwesomeIcon icon={faAngleRight}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductID;