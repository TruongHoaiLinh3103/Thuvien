"use client";

import React from 'react';
import img from "../../public/cart-empty.png";
import "../styles/wishlist.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const WishList = () => {
    const router = useRouter()
    return (
        <div className='WishList'>
            <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
            <p>There are no products liked!</p>
            <Image src={img} alt=''/>
            <div className='WishList-Total'>
                <div className='WishList-Total_d'>
                    <h4>Total: </h4>
                    <p>0 R$</p>
                </div>
                <div className='WishList-Total_btn'>
                    <button onClick={() => router.push("/")}>See more products</button>
                </div>
            </div>
        </div>
    );
};

export default WishList;