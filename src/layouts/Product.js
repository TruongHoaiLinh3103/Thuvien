"use client";

import React from 'react';
import "../styles/product.scss";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ViewProduct from '@/utils/ViewProduct';

const Product = (props) => {
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
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                },
            },
            {
                breakpoint: 740,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    }
    const data = props.data;
    return (
        <div className='Product maxWidth1400px'>
            <h2><b>MỚI </b>NHẤT</h2>
            <Slider {...settings} className="slider js-slider">
                {data.map((item) => {
                    return(
                        <div className="card" key={item.id}>
                            <div className="like"></div>
                            <img className="product"
                                src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                            <h4 className="title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                            <div className="rating">
                                {handleRating(item.rating)}
                            </div>
                            <div className="price">
                                <h5>{handlePrice(item.price)}</h5>
                                <h5>{handlePrice(item.price, true)}</h5>
                            </div>
                            <a className="button">Add to cart</a>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Product;