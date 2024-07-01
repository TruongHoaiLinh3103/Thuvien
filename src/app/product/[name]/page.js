"use client";

import PageSection from '@/components/PageSection';
import React from 'react';

const page = (props) => {
    return (
        <div>
            <PageSection name={props.params.name}/>
        </div>
    );
};

export default page;