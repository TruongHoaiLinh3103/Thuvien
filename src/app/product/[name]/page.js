"use client";

import PageSection from '@/components/PageSection';
import React from 'react';
import "@/styles/home.scss";
import LatestComments from '@/layouts/LatestComments';

const page = (props) => {
    return (
        <div className="layout-section">
            <PageSection name={props.params.name}/>
            <div style={{margin: "10px 0px"}}>
                <LatestComments/>     
            </div>
        </div>
    );
};

export default page;