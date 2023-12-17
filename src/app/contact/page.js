import Introduce from '@/components/Introduce';
import ContactDetail from '@/layouts/ContactDetail';
import Map from '@/layouts/Map';
import React from 'react';

const page = () => {
    return (
        <section>
            <Introduce/>
            <ContactDetail/>
            <Map/>
        </section>
    );
};

export default page;