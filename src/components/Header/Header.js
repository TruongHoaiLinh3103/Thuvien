"use client";

import React from 'react';
import "../../styles/header.scss";
import Link from 'next/link';
import Search from '@/layouts/Search/Search';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faPhone, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const router = useRouter();
    return (
        <nav className='Nav maxWidth1400px'>
            <h3 title='Home' onClick={() => {router.push("/")}}>LightShop</h3>
            <nav className='Nav-navbar'>
                <ul className='Nav-navbar-list'>
                    <li title='Home'><Link href="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
                    <li title='Search' className='search-nav'><FontAwesomeIcon icon={faMagnifyingGlass} />
                        <div className='Search-box'>
                            <Search/>
                        </div>
                    </li>
                    <li title='Contact'><Link href="/contact"><FontAwesomeIcon icon={faPhone} /></Link></li>
                    <li title='Cart'><Link href="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                    <li title='Account'><Link href="/user"><FontAwesomeIcon icon={faUser} /></Link></li>
                </ul>
            </nav>
        </nav>
    );
};

export default Header;