"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookOpen, faHouse } from '@fortawesome/free-solid-svg-icons';
import "../styles/productid.scss";
import { useRouter } from 'next/navigation';
import { printfID } from '@/utils/ViewURL';

const ProductID = (props) => {
    const [data, setData] = useState({});
    const router = useRouter();
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
    useEffect(() => {
        const id = printfID(props.id);
        axios.get(`https://zfakeapi.vercel.app/product/${id}`).then((res) => {
            setData(res.data);
        });
    },[])
    const Data = Object.keys(data).length === 0
    return (
        <div>
            {!Data &&
                <div className='ProductID'>
                    <div className='ProductID-title'>
                        <FontAwesomeIcon icon={faHouse} onClick={() => router.push("/")}/>
                        <span>/</span>
                        <h3 style={{cursor: "pointer", userSelect:"none"}} onClick={() => router.push(`/product/${data.menu}`)}>{data.menu}</h3>
                        <span>/</span>
                        <h3 className='ttProductID'>{data.name}</h3>
                    </div>
                    <div className='ProductID-detail'>
                        <div className='Product-detai-img'>
                            <img src={data.img} alt='Product'/>
                        </div>
                        <div className='ProductID-cmt'>
                            <h3>{data.name}</h3>
                            <div className="ProductID-detail_name_rating">
                                {handleRating(data.rating)}
                            </div>
                            <div className='ProductID-detail_name-btn'>
                                <button><FontAwesomeIcon icon={faHeart} /></button>
                                {data.menu === "comic" ?
                                ""
                                :
                                <button onClick={() => router.push(data.text)}><FontAwesomeIcon icon={faBookOpen} /></button>
                                }
                            </div>
                            <div className='ProductID-des-box'>
                                {data.text}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductID;