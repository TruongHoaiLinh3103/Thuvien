"use client";

import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import "../../styles/viewdetail.scss";
import { printfID } from '@/utils/ViewURL';

const ViewDetail = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const id = printfID(props.id)
        const fetcher = async () => {
            await fetch(`https://zfakeapi.vercel.app/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
        }
        fetcher();
    })
    if (loading){return <p>Loading...</p>}
    if (!data){return <p>No profile data</p>}
    const Data = Object.keys(data).length === 0
    return (
        <>
            {Data === false &&
                <div className='ViewDetail'>
                    <p>{data.title}</p>
                    <p>{data.author}</p>
                    <p>{data.content}</p>
                    <button onClick={() => {router.push("/blogs")}}>Go back Blogs</button>
                </div>
            }
        </>
    );
};

export default ViewDetail;