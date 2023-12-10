import Introduce from '@/components/Introduce/Introduce';
import ContactDetail from '@/layouts/ContactDetail/ContactDetail';
import MapShop from '@/layouts/MapShop/MapShop';
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