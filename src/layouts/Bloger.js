'use client';

import React, { useEffect, useState, useRef } from 'react';
import "../styles/blog.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BtnBlogs from '@/components/BtnBlogs';
import "../styles/home.scss";
import dynamic from 'next/dynamic';
const RichTextBlog = dynamic(() => import("./RichTextBlog"),{ssr: true});

const Bloger = () => {
    const [data, setData] = useState([]);
    const [isLooding, setLooding] = useState(true);
    const [modal, setModal] = useState(false);
    const [nameBtn, setNameBtn] = useState("");
    const [id, setId] = useState();
    const [content, setContent] = useState('')
    const title = useRef("");
    const editItem = (item) => {
        setModal(true)
        setNameBtn("Change")
        setId(item.id);
        if(title.current.value === ''){
            title.current.value = item.title
        }
        if(content === ""){
            setContent(item.content)
        }
    }
    const addItem = () => {
        if(!sessionStorage.user){
            alert("User not logged in!")
        }else{
            setModal(true)
            setNameBtn("Submit")
        }
    }
    const submit = () => {
        if(title.current.value === '') {
            title.current.focus();
        }else if(content === ""){
            alert("Content cannot be empty!")
        }else{
            const dataBlog = {
                title: title.current.value,
                author: sessionStorage.user,
                content: content
            }
            axios.post("http://localhost:4000/blog", dataBlog, {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            })
            .then((res) => {
                if(res.data.error){
                    alert("Title is too long!")
                }else{
                    const fecher = async () => {
                        const res = await axios.get("http://localhost:4000/blog?sortBy=desc");
                        if(res && res.data && res.data.data && res.data.data.data){
                            setData(res.data.data.data);
                            setLooding(false);
                        }
                    }
                    fecher();
                    setModal(false);
                }
            })
        }
    }
    const updateData = () => {
        if(title.current.value === '') {
            title.current.focus();
        }else if(content === ""){
            alert("Content cannot be empty!")
        }else{
            const dataBlog = {
                title: title.current.value,
                author: sessionStorage.user,
                content: content
            }
            axios.patch(`http://localhost:4000/blog/${id}`, dataBlog, {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            })
            .then((res) => {
                if(res.data.error){
                    alert("Title is too long!")
                }else{
                    const fecher = async () => {
                        const res = await axios.get("http://localhost:4000/blog?sortBy=desc");
                        if(res && res.data && res.data.data && res.data.data.data){
                            setData(res.data.data.data);
                            setLooding(false);
                        }
                    }
                    fecher();
                    setModal(false);
                }
            })
        }
    }
    const close = () => {
        setModal(false);
        title.current.value = "";
        setContent("")
    }
    const resetPage = async (Children) => {
        if(data.length > 0){
            const res = await axios.get(`http://localhost:4000/blog?page=${Children}&limit=4&sortBy=desc`)
            if(res && res.data && res.data.data && res.data.data.data){
                setData(res.data.data.data);
            }
        }
    }
    const deleteItem = (id) => {
        axios.delete(`http://localhost:4000/blog/${id}`, {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        })
        .then((res) => {
            const fecher = async () => {
                const res = await axios.get("http://localhost:4000/blog?sortBy=desc");
                if(res && res.data && res.data.data && res.data.data.data){
                    setData(res.data.data.data);
                    setLooding(false);
                }
            }
            fecher();
        })
    }
    const setContents = (Children) => {
        setContent(Children)
    }
    useEffect(() => {
        const fecher = async () => {
            const res = await axios.get("http://localhost:4000/blog?sortBy=desc");
            if(res && res.data && res.data.data && res.data.data.data){
                setData(res.data.data.data);
                setLooding(false);
            }
        }
        fecher();
    },[])
    if (!data){return <p>No profile data</p>}
    if (isLooding){return(
        <ul className="wave-menu">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )}
    return (
        <div className="blog">
            <h2><b>NO</b>TE</h2>
            <div className='blog-table'>
                <div className='blog-thead'>
                    <h3>Title</h3>
                    <h3>Author</h3>
                    <h3>Content</h3>
                </div>
                {data.map((item) => {
                    return(
                        <div className='blog-tbody' key={item.id}>
                            <div className='blog-item'>
                                {item.title}
                            </div>
                            <div className='blog-item'>
                                {item.author}
                            </div>
                            <div className='blog-item'>
                                {item.content}
                            </div>
                            {sessionStorage.user === item.author ?
                                <div className='blog-item'>
                                    <button onClick={() => editItem(item)}>Edit</button>
                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                </div>
                                :
                                ""
                            }
                        </div>
                    )
                })}
                <div className='blog-tfooter'>
                    <button onClick={() => addItem()}>Add blog</button>
                </div>
            </div>
            <div className='modal' style={{display: modal ? "flex" : "none"}}>
                <div className='box'>
                    <form>
                        <div className='box__Item'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' ref={title}/>
                        </div>
                        <div className='box__content'>
                            <label htmlFor='content'>Content</label>
                            {/* <textarea name='content' rows={10} cols={3} ref={content}></textarea> */}
                            <RichTextBlog content={setContents} value={content}/>
                        </div>
                    </form>
                    <div className='btn-form'>
                        <button onClick={() => nameBtn === "Submit" ? submit() : updateData()}>{nameBtn}</button>
                        <button onClick={() => close()}>Close</button>
                    </div>
                </div>
            </div>
            
            {data.length === 0 ? "" :
                <BtnBlogs numberPage={resetPage}/>
            }
            <ToastContainer/>
        </div>
    );
};

export default Bloger;