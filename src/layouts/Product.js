"use client";

import React from 'react';
import "../styles/product.scss";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ViewProduct from '@/utils/ViewProduct';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Product = (props) => {
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
                alert(res.data.error);
                router.push("/user")
            }else{
                alert(res.data);
                router.push("/wishlist");
            }
        })
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
            <h2><b>APPRE</b>CIATE</h2>
            <Slider {...settings} className="slider js-slider">
                {data.map((item) => {
                    return(
                        <div className="card" key={item.id}>
                            <img className="product"
                                src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                            <h4 className="title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}
                            ><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                            <div className="rating">
                                {handleRating(item.rating)}
                            </div>
                            <div className="price">
                                <h5>{handlePrice(item.price)}</h5>
                                <h5>{handlePrice(item.price, true)}</h5>
                            </div>
                            <div className='data-card_btn'>
                                <a className="button" onClick={() => addWishlist(item)}>
                                    Add to wishlist
                                </a>
                                <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default Product;