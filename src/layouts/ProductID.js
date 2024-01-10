"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookOpen, faHouse } from '@fortawesome/free-solid-svg-icons';
import "../styles/productid.scss";
import { useRouter } from 'next/navigation';
import SliderBanner from './SliderBanner';
import { printfID } from '@/utils/ViewURL';
import Comment from './Comment';

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

    const addWishlist = (item) => {
        const data = {
            img: item.imgOne,
            menu: item.menu,
            name: item.name,
            rating: item.rating,
            price: item.price,
            user: sessionStorage.user,
            productId: item.id
        }
        axios.post("http://localhost:4000/wishlist", data, {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then((res) => {
            if(res.data.error){
                alert(res.data.error)
            }else{
                router.push("/wishlist");
            }
        })
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
                        <FontAwesomeIcon icon={faHouse} onClick={() => router.push("/")}/>
                        <span>/</span>
                        <h3 style={{cursor: "pointer", userSelect:"none"}} onClick={() => router.push(`/product/${data.menu}`)}>{data.menu}</h3>
                        <span>/</span>
                        <h3 className='ttProductID'>{data.name}</h3>
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
                        </div>
                        <div className='ProductID-cmt'>
                            <h3>{data.name}</h3>
                            <div className="ProductID-detail_name_rating">
                                {handleRating(data.rating)}
                            </div>
                            <div className="ProductID-detail_name_price">
                                <h5>{handlePrice(data.price)}</h5>
                                <h5>{handlePrice(data.price, true)}</h5>
                            </div>
                            <div className='ProductID-detail_name-btn'>
                                <button onClick={() => addWishlist(data)}><FontAwesomeIcon icon={faHeart} /></button>
                                <button><FontAwesomeIcon icon={faBookOpen} /></button>
                            </div>
                            <div className='ProductID-des-box'>
                                {data.text}
                            </div>
                        </div>
                        <Comment id={props.id} data={data}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductID;