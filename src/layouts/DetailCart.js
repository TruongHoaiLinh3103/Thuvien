import React from 'react';
import img from "../../public/cart-empty.png";
import "../styles/cart.scss";
import Image from 'next/image';

const DetailCart = () => {
    return (
        <div className='Cart'>
            <h2><b>SẢN PHẨM</b> TRONG GIỎ HÀNG</h2>
            <p>Không có sản phẩm nào trong giỏ hàng</p>
            <Image src={img} alt=''/>
            <div className='Cart-Pay'>
                <div className='Cart-Pay_money'>
                    <h4>Giá trị: </h4>
                    <p>0 đ</p>
                </div>
                <div className='Cart-Pay_btn'>
                    <button>Xem thêm sản phẩm</button>
                    <button>Thanh toán</button>
                </div>
            </div>
        </div>
    );
};

export default DetailCart;