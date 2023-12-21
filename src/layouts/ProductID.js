"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookOpen, faHouse, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "../styles/productid.scss";
import { useRouter } from 'next/navigation';
import SliderBanner from './SliderBanner';
import { printfID } from '@/utils/ViewURL';
import BntPage from '@/components/BntPage';

const ProductID = (props) => {
    const [data, setData] = useState({});
    const router = useRouter();
    const [comment, setComment] = useState([]);
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
    const handlePrice = (price, discount = false) => {
        if (discount) {
            price = price * 0.9;
            // price *= 0.9;
        }
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const resetPage = (childData) => {
        const id = printfID(props.id);
        axios.get(`https://zfakeapi.vercel.app/comment?productId=${id}&_page=${childData}&_limit=9`).then((res) => {
            setComment(res.data)
        });
    }
    useEffect(() => {
        const id = printfID(props.id);
        axios.get(`https://zfakeapi.vercel.app/product/${id}`).then((res) => {
            setData(res.data)
        });
        axios.get(`https://zfakeapi.vercel.app/comment?productId=${id}&_page=1&_limit=9`).then((res) => {
            setComment(res.data)
        });
    },[])
    // const id = printfID(props.id);
    const Data = Object.keys(data).length === 0
    return (
        <div>
            {!Data && 
                <div className='ProductID'>
                    <div className='ProductID-title'>
                        <FontAwesomeIcon icon={faHouse} onClick={() => router.push("/")}/>
                        <span>/</span>
                        <h3 style={{cursor: "pointer", userSelect:"none"}} onClick={() => router.push(`/product/${data.menu}`)}>{data.menu}</h3>
                        <span>/</span>
                        <h3 className='ttProductID'>{data.name}</h3>
                    </div>
                    <div className='ProductID-detail'>
                        <div className='Product-detai-img'>
                            <SliderBanner id={data.id}/>
                            <div className='Product-detai-img_other'>
                                <div>
                                    <img src={data.imgOne} alt={data.name} />
                                </div>
                                <div>
                                    <img src={data.imgTwo} alt={data.name} />
                                </div>
                                <div>
                                    <img src={data.imgThree} alt={data.name} />
                                </div>
                            </div>
                            
                        </div>
                        <div className='ProductID-cmt'>
                            <h3>{data.name}</h3>
                            <div className="ProductID-detail_name_rating">
                                {handleRating(data.rating)}
                            </div>
                            <div className="ProductID-detail_name_price">
                                <h5>{handlePrice(data.price)}</h5>
                                <h5>{handlePrice(data.price, true)}</h5>
                            </div>
                            <div className='ProductID-detail_name-btn'>
                                <button><FontAwesomeIcon icon={faHeart} /></button>
                                <button><FontAwesomeIcon icon={faBookOpen} /></button>
                            </div>
                            <nav>
                                <h3>Mô tả</h3>
                            </nav>
                            <div className='ProductID-des-box'>
                                {data.text}
                            </div>
                        </div>
                        <div className='ProductID-cmt'>
                            <nav>
                                <h3>Bình luận</h3>
                            </nav>
                            <div className='ProductID-cmt-add'>
                                <input type='text' placeholder='Thêm bình luận...' />
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </div>
                            <div className='ProductID-cmt-box'>
                                {comment.map((item) => {
                                    return(
                                        <div className='cmt-box_item' key={item.id}>
                                            <div className='avatarAndAuth'>
                                                <img src={item.avatar} alt='Avatar' className="avatarAndAuth-img"/>
                                                <div className='Auth'>
                                                    <h3>{item.name}</h3>
                                                    <p>{item.productId}</p>
                                                </div>
                                            </div>
                                            <div className='cmtAndLike'>
                                                <p>{item.comment}</p>
                                                <div className='LikeAndDislike'>
                                                    <div>
                                                        <span>👍 {item.like}</span>
                                                        <span>💬 {item.unchat}</span>
                                                        <span style={{color:"blue"}}>edit</span>
                                                        <span style={{color:"red"}}>delete</span>
                                                    </div>
                                                    {/* <div className='unChat'>
                                                        <div className='unChatImgAndAuth'>
                                                            <img src='' alt='Avatar' className="avatarAndAuth-img"/>
                                                            <div className='Auth'>
                                                                <h3>LAnikey</h3>
                                                                <p>29-03-2003</p>
                                                            </div>
                                                        </div>
                                                        <div className='cmtAndLikeUnChat'>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                            <div className='LikeAndDislike'>
                                                                <div>
                                                                    <span>👍 19000</span>
                                                                    <span>👎 10323</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className='seeAll'>Xem thêm</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <BntPage numberPage={resetPage} id={props.id} data={data}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductID;