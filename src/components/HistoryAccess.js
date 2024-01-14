"use client";

import ViewProduct from '@/utils/ViewProduct';
import { faBook, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img from "../../public/cart-empty.png";
import "../styles/wishlist.scss";
import "../styles/history.scss";
import axios from 'axios';

const HistoryAccess = () => {
    const [todo, setTodo] = useState([]);
    const [stores, setStores] = useState('');
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
            price *= 0.9;
        }
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const deleteHistory = (id) => {
        axios.delete(`http://localhost:4000/history/${id}`,{
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then((res) => {
            if(res.data.error){
                alert(res.data.error)
            }
        })
    }
    useEffect(() => {
        if(sessionStorage.accessToken){
            setStores(sessionStorage.accessToken)
        }
        else{
            setStores('')
        }
        axios.get(`http://localhost:4000/history?keyword=${sessionStorage.user}&sortBy=desc`).then((res) => {
            if(res && res.data && res.data.data && res.data.data.data){
                setTodo(res.data.data.data)
            }
        })
    })
    return (
        <div className='HistoryAccess'>
            <h2><b>ACCESS </b>HISTORY</h2>
            <div className='HistoryAccess-Navbar'>
                {stores === '' ? 
                    <>
                        <p>User not logged in!</p>
                        <Image src={img} alt='Not history!'/>
                    </>
                        :
                    <>
                        {todo.length === 0 ?
                            <>
                                <p>Empty access history!</p>
                                <Image src={img} alt='Not history!'/>
                            </>
                            :
                            <div className='HistoryAccess-Body'>
                                {todo.map((item) => {
                                    return(
                                        <div key={item.id} className='HistoryAccess-Item'>
                                            <div>
                                                <img className='HistoryAccess-Item_img' src={item.img} alt='Foto do produtos'/>
                                            </div>
                                            <div className='HistoryAccess-Item_Describe'>
                                                <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                <div className="Item_Describe-rating">
                                                    {handleRating(item.rating)}
                                                </div>
                                                <div className="Item_Describe-price">
                                                    <h5>{handlePrice(item.price)}</h5>
                                                    <h5>{handlePrice(item.price, true)}</h5>
                                                </div>
                                                <div className='Item_Describe-btn'>
                                                    <a className="button" onClick={() => deleteHistory(item.id)}><FontAwesomeIcon icon={faXmark} /></a>
                                                    <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default HistoryAccess;