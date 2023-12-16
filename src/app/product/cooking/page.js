import React from 'react';
import SliderBanner from '@/layouts/SliderBanner';
import BntPage from '@/components/BntPage';
import PageSection from '@/components/PageSection';

const page = () => {
    return (
        <section>
            <SliderBanner/>
            <PageSection/>
            {/* <BntPage/> */}
        </section>
    );
};

export default page;