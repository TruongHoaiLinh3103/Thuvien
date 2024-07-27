import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import axios from 'axios';
import "../styles/btnbutton.scss";
import "../styles/pagesection.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ADD__COMMENT, EDIT__PAGE } from '../redux/reduccer/counterReducer';
import { useRouter } from 'next/navigation';
import Gallery from '@/layouts/Gallery';

const PageHome = () => {
    const [home, setHome] = useState([]);
    const data = useSelector((state) => state.counter.page);
    const dispatch = useDispatch();
    const router = useRouter();
    const temp = useSelector((state) => state.counter.wishlist);
    const [max, setMax] = useState(() => {
        axios.get(`https://zfakeapi.vercel.app/product`).then((res) => {
            const number = res.data.length/24;
            setMax(Math.ceil(number));
        });
    });

    const [page, setPage] = useState(data[0].number ? data[0].number : 1);

    const handleChange = (event, value) => {
        const temp = {
            id: 0,
            number: value
        }
        setPage(value)
        data.filter(item => item.id === 0 && dispatch(EDIT__PAGE(temp)));
        router.push("#PageSectionTitle")
    };

    const addWL = (data) => {
        if(temp.length === 0){
            dispatch(ADD__COMMENT(data))
            router.push("/wishlist");
        }else{
            if(temp.some((item) => item.id === data.id)){
                window.alert("Đã có trong danh sách yêu thích!")
            }else{
                dispatch(ADD__COMMENT(data))
                router.push("/wishlist");
            }
        }
    }

    const handleRating = (rating) => {
        let htmlToReturn = "";
        const maximumRatingStars = 5;
        
        for (let i = 0; i < rating; i++) {
            htmlToReturn += "⭐";
        }
        
        for (let j = 0; j < maximumRatingStars - rating; j++) {
            htmlToReturn += " ✩";
        }
        
        return htmlToReturn;
    }

    useEffect(() => { 
        axios.get(`https://zfakeapi.vercel.app/product?_page=${page}&_limit=24&_sort=id&_order=desc`).then((res) => {
            setHome(res.data);
            router.push("#PageSectionTitle")
        })
    },[page])
    return (
    <>
        <h2 className='PageSection_title' id='PageSectionTitle'><b>LAT</b>EST</h2>
        <section className='PageSection-section'>
            <Gallery images={home} handleRating={handleRating} addWL={addWL}/>
        </section>
        {home.length === 0 ? "" :
            <div className='BtnPagination'>
                <Pagination count={max} page={page} variant="outlined" color="primary" onChange={handleChange} defaultPage={6} siblingCount={0} />
            </div>
        }
    </>
    );
};

export default PageHome;