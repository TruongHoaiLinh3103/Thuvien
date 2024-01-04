import React from 'react';
import "../styles/productmenu.scss";
import Link from 'next/link';

const ProductMenu = () => {
    return (
        <div className='ProductMenu maxWidth1400px'>
            <span>Menu</span>
            <Link className="links__gerais" href="/product/cooking">Cooking</Link>
            <Link className="links__gerais" href="/product/calligraphy">Calligraphy</Link>
            <Link className="links__gerais" href="/product/website">Website</Link>
            <Link className="links__gerais" href="/product/game">Game</Link>
            <Link className="links__gerais" href="/product/comic">Comic</Link>
        </div>
    );
};

export default ProductMenu;