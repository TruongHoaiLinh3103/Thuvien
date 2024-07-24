import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import ViewProduct from '@/utils/ViewProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../styles/btnbutton.scss";
import "../styles/pagesection.scss";
import { useDispatch, useSelector } from 'react-redux';
import { ADD__COMMENT, EDIT__PAGE } from '../redux/reduccer/counterReducer';
import { useRouter } from 'next/navigation';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const PageHome = () => {
    const [home, setHome] = useState([]);
    const data = useSelector((state) => state.counter.page);
    const dispatch = useDispatch();
    const router = useRouter();
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
        dispatch(ADD__COMMENT(data));
        router.push("/wishlist")
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
        })
    },[page])
    return (
    <>
        <h2 className='PageSection_title' id='PageSectionTitle'><b>LAT</b>EST</h2>
        <section className='PageSection-section'>
            <div className='PageSection-section_data'>
                {home.map((item) => {
                    return(
                        <div className='PageSection-section_data-card' key={item.id}>
                            <LazyLoad placeholder={<Loading/>} once offset={100}><img className="data-card_product" src={item.img} alt={item.name}/></LazyLoad>
                            <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}
                            ><ViewProduct name={item.name} id={item.id} menu={item.menu} text={item.text}></ViewProduct></h4>
                            <div className="data-card_rating">
                                {handleRating(item.rating)}
                            </div>
                            <div className='data-card_btn'>
                                {item.menu === "comic" ?
                                <a className="button" onClick={() => addWL(item)}><FontAwesomeIcon icon={faHeart} /></a>
                                :
                                <a href={item.text} className="button"><FontAwesomeIcon icon={faBook} /></a>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
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