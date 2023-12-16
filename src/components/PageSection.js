"use client";

import React from 'react';
import Classify from './Classify';
import { usePathname } from 'next/navigation';

const PageSection = () => {
    const pathname = usePathname();
    return (
        <div className='PageSection'>
            <div style={{marginTop: "10px"}}>
                <Classify/>
            </div>
            {/* {pathname === "/product/cooking" && 
                
            } */}
        </div>
    );
};

export default PageSection;