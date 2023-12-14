import React from 'react';
import "../styles/productmenu.scss";
import Link from 'next/link';

const ProductMenu = () => {
    return (
        <div className='ProductMenu maxWidth1400px'>
            <span>SẢN PHẨM</span>
            <Link className="links__gerais" href="*">Appliances</Link>
            <Link className="links__gerais" href="*">Calligraphy painting</Link>
            <Link className="links__gerais" href="*">Office</Link>
            <Link className="links__gerais" href="*">Other</Link>
        </div>
    );
};

export default ProductMenu;