"use client";

import React from 'react';
import "../styles/header.scss";
import Link from 'next/link';
import ProductNav from '@/layouts/ProductNav';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBlog, faPhone, faCartShopping, faUser,faBars, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const router = useRouter();
    return (
        <nav className='Nav maxWidth1400px'>
            <div className='Nav_top'>
                <h3 title='Home' onClick={() => {router.push("/")}}>LightShop</h3>
                <div className='Nav_top_search'>
                    <input type='text' placeholder='Tìm kiếm' className='search-ip'/>
                    <span className='search-span'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
                <nav className='Nav-navbar'>
                    <ul className='Nav-navbar-list' style={{padding: "0px 10px"}}>
                        <li title='Wishtlist' style={{border: "1px solid black", borderRadius: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px"}}><Link href="/user"><FontAwesomeIcon icon={faHeart} style={{color: "black", fontSize: "20px"}}/></Link></li>
                        <li title='Cart' style={{border: "1px solid black", borderRadius: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px"}}><Link href="/cart"><FontAwesomeIcon icon={faCartShopping} style={{color: "black", fontSize: "20px"}}/></Link></li>
                    </ul>
                </nav>
            </div>
            <div className='Nav_center'>
                <input type='text' placeholder='Tìm kiếm' className='search-ip'/>
                <span className='search-span'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            </div>
            <div className='Nav_down'>
                <nav className='Nav-navbar'>
                    <ul className='Nav-navbar-list'>
                        <li title='Home'><Link href="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
                        <li title='Blog'><Link href="/blogs"><FontAwesomeIcon icon={faBlog} /></Link></li>
                        <li title='Product' className='product-nav'><FontAwesomeIcon icon={faBars} />
                            <div className='product-box'>
                                <ProductNav/>
                            </div>
                        </li>
                        <li title='Contact'><Link href="/contact"><FontAwesomeIcon icon={faPhone} /></Link></li>
                        <li title='Account'><Link href="/user"><FontAwesomeIcon icon={faUser} /></Link></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default Header;