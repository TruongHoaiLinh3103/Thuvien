import { Pagination } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import "../styles/btnbutton.scss"

const BtnListProduct = (props) => {
    const [page, setPage] = useState(1);
    const [max, setMax] = useState(() => {
        if(props.page){
            axios.get(`https://zfakeapi.vercel.app/product?menu=${props.page}`).then((res) => {
                const number = res.data.length/24;
                setMax(Math.ceil(number));
            });
        }else{
            axios.get(`https://zfakeapi.vercel.app/product?q=${props.namePage}`).then((res) => {
                const number = res.data.length/24;
                setMax(Math.ceil(number));
            });
        }
    })

    const handleChange = (event, value) => {
        setPage(value);
        props.numberPage(value)
    };

    return (
        <div className='BtnPagination'>
            <Pagination count={max} page={page} variant="outlined" color="primary" onChange={handleChange} defaultPage={6} siblingCount={0}/>
        </div>
    );
};

export default BtnListProduct;