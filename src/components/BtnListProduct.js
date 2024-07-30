import { Pagination } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import "../styles/btnbutton.scss";
import { memo } from 'react';

const BtnListProduct = (props) => {
    const [page, setPage] = useState(1);
    const [max, setMax] = useState();

    const handleChange = (event, value) => {
        setPage(value);
        props.numberPage(value)
    };
    
    useEffect(() => {
        if(props.page){
            if(props.page === "comic"){
                axios.get(`https://zfakeapi.vercel.app/product?menu=comic${props.list ? props.list: ""}`).then((res) => {
                    const number = res.data.length/24;
                    setMax(Math.ceil(number));
                });
            }else{
                axios.get(`https://zfakeapi.vercel.app/product?menu=document${props.listDocument ? props.listDocument: ""}`).then((res) => {
                    const number = res.data.length/24;
                    setMax(Math.ceil(number));
                });
            }
        }else{
            axios.get(`https://zfakeapi.vercel.app/product?q=${props.namePage}`).then((res) => {
                const number = res.data.length/24;
                setMax(Math.ceil(number));
            });
        }
    }, [props.list, props.listDocument, props.namePage])
    useLayoutEffect(() => {
        props.pageActive ? setPage(props.pageActive) : setPage(1)
    })
    return (
        <div className='BtnPagination'>
            <Pagination count={max} page={page} variant="outlined" color="primary" onChange={handleChange} defaultPage={6} siblingCount={0}/>
        </div>
    );
};

export default memo(BtnListProduct);