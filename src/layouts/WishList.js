"use client";

import React, { useEffect, useState } from 'react';
import img from "../../public/cart-empty.png";
import "../styles/wishlist.scss";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ViewProduct from '@/utils/ViewProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faXmark } from '@fortawesome/free-solid-svg-icons';
import BtnWishlist from '@/components/BtnWishlist';
import { useSelector, useDispatch } from 'react-redux'
import { DELETE__COMMENT } from '../redux/reduccer/counterReducer';

const WishList = () => {
    const path = usePathname();
    const data = useSelector((state) => state.counter.wishlist);
    const dispatch = useDispatch();

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
    const deleteWishlist = (id) => {
        dispatch(DELETE__COMMENT(id));
    }
    // const resetPage = async (Children) => {
    //     setNumberPage(Children)
    //     if(wishlist.length > 0){
    //         const res = await axios.get(`http://localhost:4000/wishlist?keyword=${sessionStorage.user}&page=${Children}&limit=24&sortBy=desc`)
    //         if(res && res.data && res.data.data && res.data.data.data){
    //             setWishList(res.data.data.data);
    //         }
    //     }
    // }
    useEffect(() => {
        
    }, [])
    return (
        <>
            {path === "/wishlist" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    {data.length === 0 ?
                        <>
                            <p>There are no products liked!</p>
                            <Image src={img} alt='Not wishlist!'/>
                        </>
                        :
                        <div className='WishList-Body'>
                            {data.map((item) => {
                                return(
                                    <div key={item.id} className='WishList-Item'>
                                        <div className='WishList-Item_img'>
                                            <img src={item.img} alt='Foto do produtos'/>
                                        </div>
                                        <div className='WishList-Item_Describe'>
                                            <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                            <div className="Item_Describe-rating">
                                                {handleRating(item.rating)}
                                            </div>
                                            <div className='Item_Describe-btn'>
                                                <a className="button" onClick={() => deleteWishlist(item.id)}><FontAwesomeIcon icon={faXmark} /></a>
                                                <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            }
        </>
    );
};

export default WishList;
