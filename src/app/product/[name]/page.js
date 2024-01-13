"use client";

import PageSection from '@/components/PageSection';
import React from 'react';
import "@/styles/home.scss";
import LatestComments from '@/layouts/LatestComments';
import WishList from '@/layouts/WishList';
import HistoryAccess from '@/components/HistoryAccess';

const page = (props) => {
    return (
        <div className="layout-section">
            <PageSection name={props.params.name}/>
            <div style={{margin: "10px 0px"}}>
                <LatestComments/>
                <HistoryAccess/>
                <WishList name={props.params.name}/>  
            </div>
        </div>
    );
};

export default page;