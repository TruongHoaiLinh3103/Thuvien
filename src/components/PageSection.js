"use client";

import React, { useEffect, useState } from 'react';
import Classify from './Classify';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import ViewProduct from '@/utils/ViewProduct';
import "../styles/pagesection.scss";
import BtnListProduct from './BtnListProduct';
import SeeMoreProduct from './SeeMoreProduct';

const PageSection = () => {
    const pathname = usePathname();
    const [cooking, setCooking] = useState([]);
    const [comic, setComic] = useState([]);
    const [website, setWebsite] = useState([]);
    const [game, setGame] = useState([]);
    const [calligraphy, setCalligraphy] = useState([]);
    const [status, setStatus] = useState(false);
    const [indexSeeMore, setIndexSeeMore] = useState(21);
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
    const cookingPage = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=cooking&_page=${Children}&_limit=21`).then((res) => {
            setCooking(res.data)
        })
    }
    const comicPage = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_page=${Children}&_limit=21`).then((res) => {
            setComic(res.data)
        })
    }
    const gamePage = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=game&_page=${Children}&_limit=21`).then((res) => {
            setGame(res.data)
        })
    }
    const websitePage = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=website&_page=${Children}&_limit=21`).then((res) => {
            setWebsite(res.data)
        })
    }
    const calligraphyPage = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=calligraphy&_page=${Children}&_limit=21`).then((res) => {
            setCalligraphy(res.data)
        })
    }
    const newReq = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=cooking&_sort=id&_order=${Children}`).then((res) => {
            setCooking(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_sort=id&_order=${Children}`).then((res) => {
            setComic(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=website&_sort=id&_order=${Children}`).then((res) => {
            setWebsite(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=game&_sort=id&_order=${Children}`).then((res) => {
            setGame(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=calligraphy&_sort=id&_order=${Children}`).then((res) => {
            setCalligraphy(res.data)
        })
        setStatus(true);
    }
    const ratingReq = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=cooking&_sort=rating&_order=${Children}`).then((res) => {
            setCooking(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_sort=rating&_order=${Children}`).then((res) => {
            setComic(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=website&_sort=rating&_order=${Children}`).then((res) => {
            setWebsite(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=game&_sort=rating&_order=${Children}`).then((res) => {
            setGame(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=calligraphy&_sort=rating&_order=${Children}`).then((res) => {
            setCalligraphy(res.data)
        })
        setStatus(true);
    }
    const resetIndexSeeMore = (Children) => {
        setIndexSeeMore(indexSeeMore + Children)
    }
    const total = (Children) => {
        axios.get(`https://zfakeapi.vercel.app/product?menu=cooking&_sort=price&_order=${Children}`).then((res) => {
            setCooking(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_sort=price&_order=${Children}`).then((res) => {
            setComic(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=website&_sort=price&_order=${Children}`).then((res) => {
            setWebsite(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=game&_sort=price&_order=${Children}`).then((res) => {
            setGame(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=calligraphy&_sort=price&_order=${Children}`).then((res) => {
            setCalligraphy(res.data)
        })
        setStatus(true);
    }
    useEffect(() => {
        axios.get("https://zfakeapi.vercel.app/product?menu=cooking&_page=1&_limit=21").then((res) => {
            setCooking(res.data)
        })
        axios.get("https://zfakeapi.vercel.app/product?menu=comic&_page=1&_limit=21").then((res) => {
            setComic(res.data)
        })
        axios.get("https://zfakeapi.vercel.app/product?menu=website&_page=1&_limit=21").then((res) => {
            setWebsite(res.data)
        })
        axios.get("https://zfakeapi.vercel.app/product?menu=game&_page=1&_limit=21").then((res) => {
            setGame(res.data)
        })
        axios.get("https://zfakeapi.vercel.app/product?menu=calligraphy&_page=1&_limit=21").then((res) => {
            setCalligraphy(res.data)
        })
    }, [])
    return (
        <div className='PageSection'>
            <Classify new={newReq} rating={ratingReq} totalPage={total}/>
            {pathname === "/product/cooking" && 
                <>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {cooking.map((item, index) => {
                                return(
                                    index < indexSeeMore &&
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <div className="data-card_like"></div>
                                        <img className="data-card_product"
                                            src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className="data-card_price">
                                            <h5>{handlePrice(item.price)}</h5>
                                            <h5>{handlePrice(item.price, true)}</h5>
                                        </div>
                                        <a className="button">Add to cart</a>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {status ? 
                        <SeeMoreProduct resetIndex={resetIndexSeeMore}/>
                    : 
                        <BtnListProduct page={"cooking"} numberPage={cookingPage}/>
                    }
                </>
            }
            {pathname === "/product/comic" && 
                <>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {comic.map((item, index) => {
                                return(
                                    index < indexSeeMore &&
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <div className="data-card_like"></div>
                                        <img className="data-card_product"
                                            src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className="data-card_price">
                                            <h5>{handlePrice(item.price)}</h5>
                                            <h5>{handlePrice(item.price, true)}</h5>
                                        </div>
                                        <a className="button">Add to cart</a>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {status ? <SeeMoreProduct resetIndex={resetIndexSeeMore}/> : <BtnListProduct page={"comic"} numberPage={comicPage}/>}
                </>
            }
            {pathname === "/product/website" && 
                <>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {website.map((item, index) => {
                                return(
                                    index < indexSeeMore &&
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <div className="data-card_like"></div>
                                        <img className="data-card_product"
                                            src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className="data-card_price">
                                            <h5>{handlePrice(item.price)}</h5>
                                            <h5>{handlePrice(item.price, true)}</h5>
                                        </div>
                                        <a className="button">Add to cart</a>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {status ? <SeeMoreProduct resetIndex={resetIndexSeeMore}/> : <BtnListProduct page={"website"} numberPage={websitePage}/>}
                </>
            }
            {pathname === "/product/game" && 
                <>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {game.map((item, index) => {
                                return(
                                    index < indexSeeMore &&
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <div className="data-card_like"></div>
                                        <img className="data-card_product"
                                            src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className="data-card_price">
                                            <h5>{handlePrice(item.price)}</h5>
                                            <h5>{handlePrice(item.price, true)}</h5>
                                        </div>
                                        <a className="button">Add to cart</a>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {status ? <SeeMoreProduct resetIndex={resetIndexSeeMore}/> : <BtnListProduct page={"game"} numberPage={gamePage}/>}
                </>
            }
            {pathname === "/product/calligraphy" && 
                <>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {calligraphy.map((item, index) => {
                                return(
                                    index < indexSeeMore &&
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <div className="data-card_like"></div>
                                        <img className="data-card_product"
                                            src={item.imgOne} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className="data-card_price">
                                            <h5>{handlePrice(item.price)}</h5>
                                            <h5>{handlePrice(item.price, true)}</h5>
                                        </div>
                                        <a className="button">Add to cart</a>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {status ? <SeeMoreProduct resetIndex={resetIndexSeeMore}/> : <BtnListProduct page={"calligraphy"} numberPage={calligraphyPage}/>}
                </>
            }
        </div>
    );
};

export default PageSection;