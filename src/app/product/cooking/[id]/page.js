import React from 'react';
import ProductID from '@/layouts/ProductID';

const page = (props) => {
    return (
        <div>
            <ProductID id={props.params.id}/>
        </div>
    );
};

export default page;