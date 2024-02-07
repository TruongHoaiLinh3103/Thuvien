"use client";

import React, { useEffect, useRef, useState } from 'react';
import "../styles/header.scss";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faHeart, faMagnifyingGlass, faMartiniGlass, faBook } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ViewProduct from '@/utils/ViewProduct';

const Header = () => {
    const router = useRouter();
    const search = useRef("");
    const loop = useRef("");
    const [data, setData] = useState([]);
    const [loopCheck, setLoopCheck] = useState(false);
    const [searchCheck, setSearchCheck] = useState(false);
    const nextSearch = () => {
        setSearchCheck(false);
        if(search.current.value === ""){
            search.current.focus();
        }else{
            router.push(`/product/${search.current.value}`);
        }
        
    }
    const nextLoop = () => {
        setLoopCheck(false);
        if(loop.current.value === ""){
            loop.current.focus();
        }else{
            router.push(`/product/${loop.current.value}`);
        }
    }
    const nextSearchEnter = (e) => {
        setSearchCheck(false);
        if(e.which === 13){
            if(search.current.value === ""){
                search.current.focus();
            }else{
                router.push(`/product/${search.current.value}`);
            }
        }
    }
    const nextLoopEnter = (e) => {
        setLoopCheck(false);
        if(e.which === 13){
            if(loop.current.value === ""){
                loop.current.focus();
            }else{
                router.push(`/product/${loop.current.value}`);
            }
        }
    }
    const searchLoop = (name) => {
        setLoopCheck(true);
        if(name === ""){
            setLoopCheck(false); 
        }
        setTimeout(() => {
            axios.get(`https://zfakeapi.vercel.app/product?q=${name}&_page=1&_limit=10`).then((res) => {
                if(res && res.data){
                    setData(res.data);
                }
            })
        }, 300)
    }
    const searchSearch = (name) => {
        setSearchCheck(true);
        if(name === ""){
            setSearchCheck(false); 
        }
        setTimeout(() => {
            axios.get(`https://zfakeapi.vercel.app/product?q=${name}&_page=1&_limit=10`).then((res) => {
                if(res && res.data){
                    setData(res.data);
                }
            })
        }, 300)
    }
    return (
        <nav className='Nav maxWidth1400px'>
            <div className='Nav_top'>
                <h3 title='Home' onClick={() => {router.push("/")}}>LisohAnikey</h3>
                <div className='Nav_top_search'>
                    <input type='text' placeholder='Search?' className='search-ip' ref={loop} onKeyDown={(e) => nextLoopEnter(e)} onChange={() => searchLoop(loop.current.value)}/>
                    <div className='Nav_top_searchToLoop' style={{display: loopCheck ? "block" : "none"}}>
                        {data.map((item) => {
                            return(
                                <div key={item.id} className='Nav_top_searchToLoop-item'>
                                    <div>
                                        <img src={item.imgOne} alt={item.name} />
                                    </div>
                                    <span onClick={() => setLoopCheck(false)}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></span>
                                </div>
                            )
                        })}
                    </div>
                    <span onClick={() => nextLoop()} className='search-span'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
                <nav className='Nav-navbar'>
                    <ul className='Nav-navbar-list' style={{padding: "0px 10px"}}>
                        <li title='Wishtlist' style={{border: "1px solid black", borderRadius: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px"}}><Link href="/wishlist"><FontAwesomeIcon icon={faHeart} style={{color: "black", fontSize: "20px"}}/></Link></li>
                    </ul>
                </nav>
            </div>
            <div className='Nav_center'>
                <input type='text' placeholder='Search?' className='search-ip' ref={search} onKeyDown={(e) => nextSearchEnter(e)} onChange={() => searchSearch(search.current.value)}/>
                <div className='Nav_top_searchToSearch' style={{display: searchCheck ? "block" : "none"}}>
                    {data.map((item) => {
                        return(
                            <div key={item.id} className='Nav_top_searchToLoop-item'>
                                <div>
                                    <img src={item.imgOne} alt={item.name} />
                                </div>
                                <span onClick={() => setSearchCheck(false)}><ViewProduct name={item.name} id={item.id} menu={item.menu}></ViewProduct></span>
                            </div>
                        )
                    })}
                </div>
                <span onClick={() => nextSearch()} className='search-span'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            </div>
            <div className='Nav_down'>
                <nav className='Nav-navbar'>
                    <ul className='Nav-navbar-list'>
                        <li title='Home'><Link href="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
                        <li title='Cooking'><Link href="/product/cooking"><FontAwesomeIcon icon={faMartiniGlass} /></Link></li>
                        <li title='Comic'><Link href="/product/comic"><FontAwesomeIcon icon={faBook} /></Link></li>
                        <li title='Account'><Link href="/user"><FontAwesomeIcon icon={faUser} /></Link></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default Header;