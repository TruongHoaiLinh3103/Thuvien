"use client";

import React, { useEffect, useState } from 'react';
import img from "../../public/cart-empty.png";
import "../styles/wishlist.scss";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import ViewProduct from '@/utils/ViewProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faXmark } from '@fortawesome/free-solid-svg-icons';

const WishList = (props) => {
    const router = useRouter();
    const path = usePathname();
    const [stores, setStores] = useState('');
    const [wishlist, setWishList] = useState([]);
    const paragraph = props.name;
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
        }
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const addWishlist = (item) => {
        const data = {
            img: item.img,
            menu: item.menu,
            name: item.name,
            rating: item.rating,
            price: item.price,
            user: sessionStorage.user,
            productId: item.productId
        }
        axios.post("http://localhost:4000/wishlist", data, {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then((res) => {
            if(res.data.error){
                alert(res.data.error)
            }else{
                axios.get(`http://localhost:4000/wishlist?keyword=${sessionStorage.user}&page=1&limit=24&sortBy=desc`).then((res) => {
                if(res && res.data && res.data.data && res.data.data.data){
                    setWishList(res.data.data.data)
                }
        })
            }
        })
    }
    const Redian = (array) => {
        let price = 0;
        array.map((item) => {
            item.price *= 0.9;
            price += item.price;
        })
        return price.toFixed(2);
    }
    useEffect(() => {
        if(sessionStorage.accessToken){
            setStores(sessionStorage.accessToken)
        }
        else{
            setStores('')
        }
        axios.get(`http://localhost:4000/wishlist?keyword=${sessionStorage.user}&page=1&limit=24&sortBy=desc`).then((res) => {
            if(res && res.data && res.data.data && res.data.data.data){
                setWishList(res.data.data.data)
            }
        })
    }, [])
    return (
        <>
            {path === "/wishlist" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    {stores === '' ? 
                        <>
                            <p>User not logged in!</p>
                            <Image src={img} alt='Not wishlist!'/>
                        </>
                    :
                        <>
                            {wishlist.length === 0 ?
                                <>
                                    <p>There are no products liked!</p>
                                    <Image src={img} alt='Not wishlist!'/>
                                </>
                                :
                                <div className='WishList-Body'>
                                    {wishlist.map((item) => {
                                        return(
                                            <div key={item.id} className='WishList-Item'>
                                                <div>
                                                    <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                </div>
                                                <div className='WishList-Item_Describe'>
                                                    <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                    <div className="Item_Describe-rating">
                                                        {handleRating(item.rating)}
                                                    </div>
                                                    <div className="Item_Describe-price">
                                                        <h5>{handlePrice(item.price)}</h5>
                                                        <h5>{handlePrice(item.price, true)}</h5>
                                                    </div>
                                                    <div className='Item_Describe-btn'>
                                                        <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                        <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </>
                    }
                    <div className='WishList-Total'>
                        <div className='WishList-Total_d'>
                            <h4>Total: </h4>
                            <p>{Redian(wishlist)} R$</p>
                        </div>
                        <div className='WishList-Total_btn'>
                            <button onClick={() => router.push("/")}>See more products</button>
                        </div>
                    </div>
                </div>
            }
            {path === "/" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
            {path === `/product/${paragraph}` &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
            {path === "/product/cooking" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
            {path === "/product/calligraphy" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
            {path === "/product/website" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
            {path === "/product/game" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
            {path === "/product/comic" &&
                <div className='WishList'>
                    <h2><b>YOU ESPEC</b>IALLY LIKE</h2>
                    <div className='WishList-Navbar'>
                        {stores === '' ? 
                            <>
                                <p>User not logged in!</p>
                                <Image src={img} alt='Not wishlist!'/>
                            </>
                        :
                            <>
                                {wishlist.length === 0 ?
                                    <>
                                        <p>There are no products liked!</p>
                                        <Image src={img} alt='Not wishlist!'/>
                                    </>
                                    :
                                    <div className='WishList-Body'>
                                        {wishlist.map((item) => {
                                            return(
                                                <div key={item.id} className='WishList-Item'>
                                                    <div>
                                                        <img className='WishList-Item_img' src={item.img} alt='Foto do produtos'/>
                                                    </div>
                                                    <div className='WishList-Item_Describe'>
                                                        <h4 title={item.name} style={{textAlign: "center", cursor:"pointer"}}><ViewProduct name={item.name} id={item.productId} menu={item.menu}></ViewProduct></h4>
                                                        <div className="Item_Describe-rating">
                                                            {handleRating(item.rating)}
                                                        </div>
                                                        <div className="Item_Describe-price">
                                                            <h5>{handlePrice(item.price)}</h5>
                                                            <h5>{handlePrice(item.price, true)}</h5>
                                                        </div>
                                                        <div className='Item_Describe-btn'>
                                                            <a className="button" onClick={() => addWishlist(item)}><FontAwesomeIcon icon={faXmark} /></a>
                                                            <a className="button"><FontAwesomeIcon icon={faBook} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default WishList;