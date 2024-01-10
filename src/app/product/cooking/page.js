import React from 'react';
import SliderBanner from '@/layouts/SliderBanner';
import PageSection from '@/components/PageSection';
import LatestComments from '@/layouts/LatestComments';
import "@/styles/home.scss";
import WishList from '@/layouts/WishList';

const page = () => {
    return (
        <section>
            <SliderBanner/>
            <div className="layout-section">
                <PageSection/>
                <div style={{margin: "10px 0px"}}>
                    <LatestComments/>
                    <WishList/>
                </div>
            </div>
        </section>
    );
};

export default page;