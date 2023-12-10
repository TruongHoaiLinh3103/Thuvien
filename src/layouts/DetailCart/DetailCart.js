import React from 'react';
import img from "../../assets/Img/cart-empty.png";
import "../../styles/cart.scss";
import Image from 'next/image';

const DetailCart = () => {
    return (
        <div className='Cart'>
            <h2><b>PRODUCTS</b> IN THE CART</h2>
            <p>There are no products in the cart</p>
            <Image src={img} alt=''/>
            <div className='Cart-Pay'>
                <div className='Cart-Pay_money'>
                    <h4>Total: </h4>
                    <p>0 đ</p>
                </div>
                <div className='Cart-Pay_btn'>
                    <button>See more products</button>
                    <button>Pay</button>
                </div>
            </div>
        </div>
    );
};

export default DetailCart;