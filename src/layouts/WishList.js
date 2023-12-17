import React from 'react';
import img from "../../public/cart-empty.png";
import "../styles/wishlist.scss";
import Image from 'next/image';

const WishList = () => {
    return (
        <div className='WishList'>
            <h2><b>BẠN ĐẶC</b> BIỆT THÍCH</h2>
            <p>Không có sản phẩm nào được thích</p>
            <Image src={img} alt=''/>
            <div className='WishList-Total'>
                <div className='WishList-Total_d'>
                    <h4>Tổng điểm: </h4>
                    <p>0 R$</p>
                </div>
                <div className='WishList-Total_btn'>
                    <button>Xem thêm sản phẩm</button>
                </div>
            </div>
        </div>
    );
};

export default WishList;