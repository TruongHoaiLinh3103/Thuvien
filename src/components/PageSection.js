"use client";

import React, { useEffect, useLayoutEffect, useState } from 'react';
import Classify from './Classify';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import ViewProduct from '@/utils/ViewProduct';
import "../styles/pagesection.scss";
import BtnListProduct from './BtnListProduct';
import BtnHome from './BtnHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import { DELETE__COMMENT, ADD__COMMENT } from '../redux/reduccer/counterReducer';

const PageSection = (props) => {
    const pathname = usePathname();
    const [document, setDocument] = useState([]);
    const [comic, setComic] = useState([])
    const [product, setProduct] = useState([]);
    const [temp, setTemp] = useState('_sort=id&_order=desc')
    const [resultS, setResultS] = useState(false);
    const [checkReq, setCheckReq] = useState(false);
    const [home, setHome] = useState([]);
    const [Search] = useState(typeof window !== 'undefined' && localStorage.paginateSearch ? localStorage.paginateSearch : 1);
    const [Home] = useState(typeof window !== 'undefined' && localStorage.paginateHome ? localStorage.paginateHome : 1);
    const [Document, setDocumentPage] = useState(typeof window !== 'undefined' && localStorage.paginateDocument ? localStorage.paginateDocument : 1);
    const [Comic, setComicPage] = useState(typeof window !== 'undefined' && localStorage.paginateComic ? localStorage.paginateComic : 1);
    const paragraph = props.name;
    const dispatch = useDispatch();
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
    const productPage = (Children) => {
        localStorage.setItem("paginateSearch", Children)
        axios.get(`https://zfakeapi.vercel.app/product?_page=${Children}&_limit=24&q=${paragraph}&${temp}`).then((res) => {
            if(res.data.length > 0){
                setProduct(res.data);
            }else{
                axios.get(`https://zfakeapi.vercel.app/product?_page=1&_limit=24&q=${paragraph}&${temp}`).then((res) => {
                    if(res.data.length > 0){
                        setProduct(res.data);
                    }else{
                        setResultS(true);
                    }       
                })
            }
        })
    }
    const homePage = (Children) => {
        localStorage.setItem("paginateHome", Children)
        axios.get(`https://zfakeapi.vercel.app/product?_page=${Children}&_limit=24&${temp}`).then((res) => {
            setHome(res.data)
        })
    }
    const documentPage = (Children) => {
        localStorage.setItem("paginateDocument", Children)
        axios.get(`https://zfakeapi.vercel.app/product?menu=document&_page=${Children}&_limit=24&${temp}`).then((res) => {
            setDocument(res.data)
        })
    }
    const comicPage = (Children) => {
        localStorage.setItem("paginateComic", Children)
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_page=${Children}&_limit=24&${temp}`).then((res) => {
            setComic(res.data)
        })
    }
    const ratingReq = (Children) => {
        setTemp(Children);
        setCheckReq(true);
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_page=${Comic}&_limit=24&${Children}`).then((res) => {
            setComic(res.data)
        })
        axios.get(`https://zfakeapi.vercel.app/product?menu=document&_page=${Document}&_limit=24&${Children}`).then((res) => {
            setDocument(res.data)
        })
    }
    const addWL = (data) => {
        dispatch(ADD__COMMENT(data));
        router.push("/wishlist")
    }
    useEffect(() => {
        //Search
        axios.get(`https://zfakeapi.vercel.app/product?_page=${Search}&_limit=24&q=${paragraph}&${temp}`).then((res) => {
            if(res.data.length > 0){
                setProduct(res.data);
            }else{
                axios.get(`https://zfakeapi.vercel.app/product?_page=1&_limit=24&q=${paragraph}&${temp}`).then((res) => {
                    if(res.data.length > 0){
                        setProduct(res.data);
                    }else{
                        setResultS(true);
                    }       
                })
            }
        })
        //Home
        axios.get(`https://zfakeapi.vercel.app/product?_page=${Home}&_limit=24&${temp}`).then((res) => {
            setHome(res.data);
        })
        //Document
        axios.get(`https://zfakeapi.vercel.app/product?menu=document&_page=${Document}&_limit=24&${temp}`).then((res) => {
            setDocument(res.data);
        })
        //Comic
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic&_page=${Comic}&_limit=24&${temp}`).then((res) => {
            setComic(res.data)
        })
    }, [])
    useLayoutEffect(() => {
        setDocumentPage(typeof window !== 'undefined' && localStorage.paginateDocument ? localStorage.paginateDocument : 1);
        setComicPage(typeof window !== 'undefined' && localStorage.paginateComic ? localStorage.paginateComic : 1);
    })
    return (
        <div className='PageSection'>
            {pathname === `/` && 
                <>
                    <h2 className='PageSection_title'><b>LAT</b>EST</h2>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {home.map((item) => {
                                return(
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <img className="data-card_product"
                                            src={item.img} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}
                                        ><ViewProduct name={item.name} id={item.id} menu={item.menu} text={item.text}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className='data-card_btn'>
                                            {item.menu === "comic" ?
                                            <a className="button" onClick={() => addWL(item)}><FontAwesomeIcon icon={faHeart} /></a>
                                            :
                                            <a href={item.text} className="button"><FontAwesomeIcon icon={faBook} /></a>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {home.length === 0 ? "" :
                        <BtnHome numberPage={homePage} active={parseInt(Home)}/>
                    }
                </>
            }
            {pathname === `/product/${paragraph}` && 
                <>
                    <div style={{display: !resultS ? "block" : "none"}}>
                        <p style={{margin: "0px 10px",fontSize: "20px"}}>Keyword | <b>{decodeURI(paragraph)}</b></p>
                        <section className='PageSection-section'>
                            <div className='PageSection-section_data'>
                                {product.map((item, index) => {
                                    return(
                                        <div className='PageSection-section_data-card' key={item.id}>
                                            <img className="data-card_product"
                                                src={item.img} alt={`Foto do produtos - ${item.name}`}/>
                                            <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}} 
                                            ><ViewProduct name={item.name} id={item.id} menu={item.menu} text={item.text}></ViewProduct></h4>
                                            <div className="data-card_rating">
                                                {handleRating(item.rating)}
                                            </div>
                                            <div className='data-card_btn'>
                                                {item.menu === "comic" ?
                                                <a className="button" onClick={() => addWL(item)}><FontAwesomeIcon icon={faHeart} /></a>
                                                :
                                                <a href={item.text} className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                }
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                        {product.length === 0 ? "" :
                            <BtnListProduct numberPage={productPage} namePage={paragraph} active={parseInt(Search)} />
                        }
                    </div>
                    <div style={{display: resultS ? "flex" : "none", alignItems: "center", justifyContent: 'center'}}>
                        <p style={{fontSize: "20px", margin: "10px"}}><b>404</b> | Không tìm thấy kết quả tìm kiếm</p>
                    </div>
                </>
            }
            {pathname === "/product/document" && 
                <>
                    <Classify rating={ratingReq}/>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {document.map((item, index) => {
                                return(
                                    <div className='PageSection-section_data-card' key={item.id}> 
                                        <img className="data-card_product"
                                            src={item.img} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}} 
                                        ><ViewProduct name={item.name} id={item.id} menu={item.menu} text={item.text}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className='data-card_btn'>
                                            <a href={item.text} className="button"><FontAwesomeIcon icon={faBook} /></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {document.length === 0  ? "" :
                        <BtnListProduct page={"document"} numberPage={documentPage} check={checkReq} filter={temp} active={parseInt(Document)} />
                    }
                </>
            }
            {pathname === "/product/comic" && 
                <>
                    <Classify rating={ratingReq}/>
                    <section className='PageSection-section'>
                        <div className='PageSection-section_data'>
                            {comic.map((item, index) => {
                                return(
                                    <div className='PageSection-section_data-card' key={item.id}>
                                        <img className="data-card_product"
                                            src={item.img} alt={`Foto do produtos - ${item.name}`}/>
                                        <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}} 
                                        ><ViewProduct name={item.name} id={item.id} menu={item.menu} text={item.text}></ViewProduct></h4>
                                        <div className="data-card_rating">
                                            {handleRating(item.rating)}
                                        </div>
                                        <div className='data-card_btn'>
                                            <a className="button" onClick={() => addWL(item)}><FontAwesomeIcon icon={faHeart} /></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    {comic.length === 0  ? "" :
                        <BtnListProduct page={"comic"} numberPage={comicPage} check={checkReq} filter={temp} active={parseInt(Comic)} />
                    }
                </>
            }
        </div>
    );
};

export default PageSection;