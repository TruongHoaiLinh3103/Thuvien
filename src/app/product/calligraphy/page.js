import BntPage from '@/components/BntPage';
import PageSection from '@/components/PageSection';
import SliderBanner from '@/layouts/SliderBanner';
import React from 'react';

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