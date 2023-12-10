import React from 'react';
import ViewDetail from '@/layouts/ViewDetail/ViewDetail';

const page = (props) => {
    return (
        <div>
            <ViewDetail id = {props.params.id}/>
        </div>
    );
};

export default page;