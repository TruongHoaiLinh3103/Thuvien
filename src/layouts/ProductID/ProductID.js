"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "../../styles/productid.scss";
import { useRouter } from 'next/navigation';

const ProductID = (props) => {
    const [data, setData] = useState({});
    const router = useRouter()
    useEffect(() => {
        const id = props.id;
        axios.get(`http://localhost:4000/Product/${id}`).then((res) => {
            setData(res.data)
        })
    },[])
    const Data = Object.keys(data).length === 0
    return (
        <div>
            {!Data && 
                <div className='ProductID'>
                    <div className='ProductID-title'>
                        <FontAwesomeIcon icon={faAngleLeft} onClick={() => router.push("/")}/>
                        <h3>{data.name}</h3>
                    </div>
                    <div className='ProductID-detail'>
                        <div className='Product-detai-img'>
                            <img src={data.img} alt={data.name} />
                            <div className='Product-detai-img_other'>
                                <img src={data.img} alt={data.name} />
                                <img src={data.img} alt={data.name} />
                                <img src={data.img} alt={data.name} />
                                <img src={data.img} alt={data.name} />
                                <img src={data.img} alt={data.name} />
                                <img src={data.img} alt={data.name} />
                            </div>
                        </div>
                        <div className='ProductID-detail_name'>
                            <h3>{data.name}</h3>
                            <h4>{data.price}$</h4>
                            <div className='ProductID-detail_name-btn'>
                                <button>Like</button>
                                <button>Add to cart</button>
                            </div>
                            <div className='ProductID-cmt'>
                                <nav>
                                    <h3>Mô tả</h3>
                                    <h3>Bình luận</h3>
                                </nav>
                                <div className='ProductID-cmt-box'>
                                    
                                </div>
                                <div className='ProductID-cmt_page'>
                                    <button><FontAwesomeIcon icon={faAngleLeft} /></button>
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button><FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductID;