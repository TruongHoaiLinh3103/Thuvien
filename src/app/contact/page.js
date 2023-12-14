import Introduce from '@/components/Introduce';
import ContactDetail from '@/layouts/ContactDetail';
import MapShop from '@/layouts/MapShop';
import React from 'react';

const page = () => {
    return (
        <section>
            <Introduce/>
            <ContactDetail/>
            <MapShop/>
        </section>
    );
};

export default page;