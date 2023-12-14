import React from 'react';
import "../../styles/productnav.scss";
const ProductNav = () => {
    return (
        <div className='ProductNav'>
            <ul className='ProductNav-history'>
                <div className='ProductNav-history_display'>
                    <li>Appliances</li>
                </div>
                <div className='ProductNav-history_display'>
                    <li>Calligraphy painting</li>
                </div>
                <div className='ProductNav-history_display'>
                    <li>Office</li>
                </div>
                <div className='ProductNav-history_display'>
                    <li>Other</li>
                </div>
            </ul>
        </div>
    );
};

export default ProductNav;