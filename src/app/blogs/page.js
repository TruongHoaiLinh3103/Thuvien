import React from 'react';
import Bloger from '@/layouts/Bloger';

export const metadata = {
    title: 'Blog',
    description: 'Library in Anikey',
    openGraph: {
        title: "LisohAnikey",
        description: "Library in Anikey",
        type: "website",
        author: ["Trương Hoài Linh", "Anikey"],
        // images: ['/some-specific-page-image.jpg', ...previousImages],
        images: ["https://i.pinimg.com/originals/9c/5b/16/9c5b16ece475a3257034303b6023c8ee.jpg",]
    },
}

const page = () => {
    return (
        <div className='maxWidth1400px'>
           <Bloger/>
        </div>
    );
};

export default page;