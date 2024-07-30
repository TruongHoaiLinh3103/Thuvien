"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import "../styles/pagesection.scss";
import BtnListProduct from './BtnListProduct';
import { useDispatch, useSelector } from 'react-redux'
import { ADD__COMMENT, EDIT__PAGE, EDIT__SORT, EDIT__LIST, EDIT__LISTDOCUMENT } from '../redux/reduccer/counterReducer';
import Gallery from '@/layouts/Gallery';
import Sort from './Sort';

const PageSection = (props) => {
    const pathname = usePathname();
    const [document, setDocument] = useState([]);
    const [comic, setComic] = useState([])
    const [product, setProduct] = useState([]);
    const [resultS, setResultS] = useState(false);
    const paragraph = props.name;
    const dispatch = useDispatch();
    const router = useRouter();
    const data = useSelector((state) => state.counter.page);
    const [Search, setSearch] = useState(data[1].number ? data[1].number : 1)
    const [Doc, setDoc] = useState(data[2].number ? data[2].number : 1)
    const [Com, setCom] = useState(data[3].number ? data[3].number : 1);
    const inLove = useSelector((state) => state.counter.wishlist);
    const sort = useSelector((state) => state.counter.sort)
    const list = useSelector((state) => state.counter.list);
    const listDocument = useSelector((state) => state.counter.listDocument)

    const comicPage = useCallback((Children) => {
        setCom(Children)
        const temp = {
            id: 3,
            number: Children
        }
        data.filter(item => item.id === 3 && dispatch(EDIT__PAGE(temp)));
        router.push("#PageSection")
    },[Com])

    const handleList = useCallback((Children) => {
        dispatch(EDIT__LIST(Children))
        setCom(1);
        data.filter(item => item.id === 3 && dispatch(EDIT__PAGE({id: 3, number: 1})));
        router.push("#PageSection")
    },[list, Com])

    const handleListDocument = useCallback((Children) => {
        dispatch(EDIT__LISTDOCUMENT(Children))
        setDoc(1);
        data.filter(item => item.id === 2 && dispatch(EDIT__PAGE({id: 2, number: 1})));
        router.push("#PageSection")
    },[listDocument, Doc])

    const handleSort = useCallback((Children) => {
        dispatch(EDIT__SORT(Children))
    },[sort])

    const productPage = useCallback((Children) => {
        setSearch(Children)
        const temp = {
            id: 1,
            number: Children
        }
        data.filter(item => item.id === 1 && dispatch(EDIT__PAGE(temp)))
        router.push("#PageSection")
    },[Search])

    const documentPage = useCallback((Children) => {
        setDoc(Children)
        const temp = {
            id: 2,
            number: Children
        }
        data.filter(item => item.id === 2 && dispatch(EDIT__PAGE(temp)))
        router.push("#PageSection")
    },[Doc])

    const addWL = (data) => {
        if(inLove.length === 0){
            dispatch(ADD__COMMENT(data))
            router.push("/wishlist");
        }else{
            if(inLove.some((item) => item.id === data.id)){
                window.alert("Đã có trong danh sách yêu thích!")
            }else{
                dispatch(ADD__COMMENT(data))
                router.push("/wishlist");
            }
        }
    }

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
    useEffect(() => {
        //Search
        axios.get(`https://zfakeapi.vercel.app/product?_page=${Search}&_limit=24&q=${paragraph}&_sort=id&_order=desc`).then((res) => {
            if(res.data.length > 0){
                setProduct(res.data);
            }else{
                axios.get(`https://zfakeapi.vercel.app/product?_page=1&_limit=24&q=${paragraph}&_sort=id&_order=desc`).then((res) => {
                    if(res.data.length > 0){
                        setProduct(res.data);
                    }else{
                        setResultS(true);
                    }       
                })
            }
            router.push("#PageSection")
        })
        //Document
        axios.get(`https://zfakeapi.vercel.app/product?menu=document${listDocument}&_page=${Doc}&_limit=24&_sort=id&_order=desc`).then((res) => {
            setDocument(res.data);
            router.push("#PageSection")
        })
        //Comic
        axios.get(`https://zfakeapi.vercel.app/product?menu=comic${list}&_page=${Com}&_limit=24${sort}`).then((res) => {
            setComic(res.data)
            router.push("#PageSection")
        })
    }, [Search, Doc, Com, list, sort, listDocument])
    return (
        <div className='PageSection' id='PageSection'>
            {pathname === `/product/${paragraph}` && 
                <>
                    <div style={{display: !resultS ? "block" : "none"}}>
                        <p style={{margin: "0px 10px",fontSize: "20px"}}>Keyword | <b>{decodeURI(paragraph)}</b></p>
                        <section className='PageSection-section'>
                            <Gallery images={product} handleRating={handleRating} addWL={addWL}/>
                        </section>
                        {product.length === 0 ? "" :
                            <BtnListProduct numberPage={productPage} pageActive={data[1].number} namePage={paragraph}/>
                        }
                    </div>
                    <div style={{display: resultS ? "flex" : "none", alignItems: "center", justifyContent: 'center'}}>
                        <p style={{fontSize: "20px", margin: "10px"}}><b>404</b> | Không tìm thấy kết quả tìm kiếm</p>
                    </div>
                </>
            }
            {pathname === "/product/document" && 
                <>
                    <Sort handleListDocument={handleListDocument}/>
                    <section className='PageSection-section'>
                        {document.length === 0 ? 
                            <div style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
                                <p style={{fontSize: "20px", margin: "10px"}}><b>404</b> | Không có kết quả thể loại</p>
                            </div>
                        :
                            <Gallery images={document} handleRating={handleRating} addWL={addWL}/>
                        }
                    </section>
                    {document.length === 0  ? "" :
                        <BtnListProduct page={"document"} pageActive={data[2].number} numberPage={documentPage}/>
                    }
                </>
            }
            {pathname === "/product/comic" && 
                <>
                    <Sort handleSort={handleSort} handleList={handleList}/>
                    <section className='PageSection-section'>
                        {comic.length === 0 ? 
                            <div style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
                                <p style={{fontSize: "20px", margin: "10px"}}><b>404</b> | Không có kết quả thể loại</p>
                            </div>
                        :
                            <Gallery images={comic} handleRating={handleRating} addWL={addWL}/>
                        }
                    </section>
                    {comic.length === 0  ? "" :
                        <BtnListProduct page={"comic"} list={list} pageActive={data[3].number} numberPage={comicPage}/>
                    }
                </>
            }
        </div>
    );
};

export default PageSection;