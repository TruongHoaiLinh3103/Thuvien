import React from 'react';
import "../styles/productnav.scss";
import Link from 'next/link';
const ProductNav = () => {
    return (
        <div className='ProductNav'>
            <ul className='ProductNav-history'>
                <div className='ProductNav-history_display'>
                    <li><Link href="/product/comic">Comic</Link></li>
                </div>
                <div className='ProductNav-history_display'>
                    <li><Link href="/product/calligraphy">Calligraphy</Link></li>
                </div>
                <div className='ProductNav-history_display'>
                    <li><Link href="/product/cooking">Cooking</Link></li>
                </div>
                <div className='ProductNav-history_display'>
                    <li><Link href="/product/website">Website</Link></li>
                </div>
                <div className='ProductNav-history_display'>
                    <li><Link href="/product/game">Game</Link></li>
                </div>
            </ul>
        </div>
    );
};

export default ProductNav;