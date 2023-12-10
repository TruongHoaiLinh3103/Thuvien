"use client";

import React, { useEffect } from 'react';
import "../../styles/slider.scss";
import ic1 from "../../assets/Img/ic-1.jpg";
import ic2 from "../../assets/Img/ic-2.jpg";
import ic3 from "../../assets/Img/ic-3.jpg";
import ic4 from "../../assets/Img/ic-4.jpg";
import ic5 from "../../assets/Img/ic-5.jpg";
import Image from 'next/image';
import $ from "jquery";
import "slick-carousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = () => {  
    useEffect(() => {
        $(".SliderCarousel").not('.slick-initialized').slick({
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            draggable: false,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        });
        $(".SliderCarousel")
            .on("beforeChange", () => {
            $(" .SliderCarousel .slick-list").addClass("do-transition");
            })
            .on("afterChange", () => {
            $(" .SliderCarousel .slick-list").removeClass("do-transition");
            });
        $('.slick-next').click(function() {
            $(".SliderCarousel").slick('slickNext');
        });
        $('.slick-prev').click(function() {
            $(".SliderCarousel").slick('slickPrev');
        });
        
    })
    return (
        <div className='SliderHeader maxWidth1400px'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            width="0" height="0" viewBox="0 0 1366 768">
                <defs>
                    <filter id="blur0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
                    </filter>
                    <filter id="blur1">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
                    </filter>
                    <filter id="blur2">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12 0" />
                    </filter>
                    <filter id="blur3">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20 0" />
                    </filter>
                    <filter id="blur4">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="35 1" />
                    </filter>
                    <filter id="blur5">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="50 1" />
                    </filter>
                </defs>
            </svg>
            <button type='button' className='slick-prev'>Previous</button>
            <button type='button' className='slick-next'>Next</button>
            <div className="SliderCarousel">
                <div>
                    <Image src={ic1} alt=''/>
                </div>
                <div>
                    <Image src={ic2} alt=''/>
                </div>
                <div>
                    <Image src={ic3} alt=''/>
                </div>
                <div>
                    <Image src={ic4} alt=''/>
                </div>
                <div>
                    <Image src={ic5} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Slider;