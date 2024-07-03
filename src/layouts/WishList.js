"use client";

import React, { useEffect, useState } from 'react';
import img from "../../public/cart-empty.png";
import "../styles/wishlist.scss";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ViewProduct from '@/utils/ViewProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE__COMMENT } from '../redux/reduccer/counterReducer';

const WishList = () => {
    const path = usePathname();
    const data = useSelector((state) => state.counter.wishlist);
    const dispatch = useDispatch();
    const [wishlist, setWishlist] = useState([])

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
    const deleteWishlist = (item) => {
        dispatch(DELETE__COMMENT(item));
    }
    useEffect(() => {
        setWishlist(data);
    })
    return (
        <>
            {path === "/wishlist" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    {wishlist.length === 0 ?
                        <>
                            <p>There are no products liked!</p>
                            <Image src={img} alt='Not wishlist!'/>
                        </>
                        :
                        <div className='WishList-Body'>
                            {wishlist.map((item) => {
                                return(
                                    <div key={item.id} className='WishList-Item'>
                                        <div className='WishList-Item_img'>
                                            <img src={item.img} alt='Foto do produtos'/>
                                        </div>
                                        <div className='WishList-Item_Describe'>
                                            <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                                            <div className="Item_Describe-rating">
                                                {handleRating(item.rating)}
                                            </div>
                                            <div className='Item_Describe-btn'>
                                                <a className="button" onClick={() => deleteWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
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
