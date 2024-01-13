import PageSection from '@/components/PageSection';
import LatestComments from '@/layouts/LatestComments';
import SliderBanner from '@/layouts/SliderBanner';
import React from 'react';
import "@/styles/home.scss";
import WishList from '@/layouts/WishList';
import HistoryAccess from '@/components/HistoryAccess';

const page = () => {
    return (
        <section>
            <SliderBanner/>
            <div className="layout-section">
                <PageSection/>
                <div style={{margin: "10px 0px"}}>
                    <LatestComments/>
                    <HistoryAccess/>
                    <WishList/>
                </div>
            </div>
        </section>
    );
};

export default page;