'use client';

import React, { useEffect, useState, useRef } from 'react';
import "../styles/blog.scss";
import axios from 'axios';
import BtnBlogs from '@/components/BtnBlogs';
import "../styles/home.scss";
import DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
const RichTextBlog = dynamic(() => import("./RichTextBlog"),{ssr: true});

const Bloger = () => {
    const [data, setData] = useState([]);
    const [isLooding, setLooding] = useState(true);
    const [modal, setModal] = useState(false);
    const [see, setSee] = useState(false);
    const [nameBtn, setNameBtn] = useState("");
    const [id, setId] = useState();
    const [content, setContent] = useState('');
    const [seeContentDetail, setSeeContentDetail] = useState("");
    const [seeTitle, setSeeTitle] = useState("");
    const [seeAuth ,setSeeAuth] = useState("")
    const title = useRef("");
    const router = useRouter();
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
            alert("User not logged in!");
            router.push("/user");
        }else{
            setModal(true)
            setNameBtn("Submit")
        }
    }
    const seeContent = (item) => {
        setSee(true)
        setSeeTitle(item.title);
        setSeeContentDetail(item.content);
        setSeeAuth(item.author)
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
                        const res = await axios.get(`http://localhost:4000/blog?keyword=${sessionStorage.user}&sortBy=desc`);
                        if(res && res.data && res.data.data && res.data.data.data){
                            setData(res.data.data.data);
                            setLooding(false);
                        }
                    }
                    fecher();
                    setModal(false);
                    title.current.value = '';
                    setContent("")
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
                        const res = await axios.get(`http://localhost:4000/blog?keyword=${sessionStorage.user}&sortBy=desc`);
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
        setSee(false)
        title.current.value = "";
        setContent("")
        setSeeContentDetail("");
        setSeeTitle("")
    }
    const resetPage = async (Children) => {
        if(data.length > 0){
            const res = await axios.get(`http://localhost:4000/blog?keyword=${sessionStorage.user}&page=${Children}&limit=4&sortBy=desc`)
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
                const res = await axios.get(`http://localhost:4000/blog?keyword=${sessionStorage.user}&sortBy=desc`);
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
    const detailContent = (contents) => {
        const htmlSanatized = DOMPurify.sanitize(contents);
        return htmlSanatized;
    }
    useEffect(() => {
        const fecher = async () => {
            const res = await axios.get(`http://localhost:4000/blog?keyword=${sessionStorage.user}&sortBy=desc`);
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
            <h2 className='blog-title'><b>NO</b>TE</h2>
            <div className='blog-table'>
                <div className='blog-add-btn'>
                    <button onClick={() => addItem()}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <div className='blog-thead'>
                    <h3>Title</h3>
                    <h3>Author</h3>
                    <h3>Content</h3>
                </div>
                {sessionStorage.user ? 
                    <>
                        {data.map((item) => {
                            return(
                                <div className='blog-tbody' key={item.id}>
                                    <div className='blog-item' style={{position:"relative"}}>
                                        <h4>{item.title}</h4>
                                        <div className='blog-custom'>
                                            <button onClick={() => editItem(item)}><FontAwesomeIcon icon={faPencil} /></button>
                                            <button onClick={() => deleteItem(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                    </div>
                                    <div className='blog-item'>
                                        <h4>{item.author}</h4>
                                    </div>
                                    <div className='blog-item'>
                                        <div
                                            dangerouslySetInnerHTML={{__html: detailContent(item.content)}}
                                            onClick={() => seeContent(item)}
                                        ></div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='blog-span_line'></div>
                    </>
                    :
                    <div className='blog-span_line'>
                        <h3>Please log in to use the blog!</h3>
                    </div>
                }
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
                            <RichTextBlog content={setContents} value={content}/>
                        </div>
                    </form>
                    <div className='btn-form'>
                        <button onClick={() => nameBtn === "Submit" ? submit() : updateData()}>{nameBtn}</button>
                        <button onClick={() => close()}>Close</button>
                    </div>
                </div>
            </div>
            <div className='modal' style={{display: see ? "flex" : "none"}}>
                <div className='box'>
                    <form>
                        <div className='box__Item'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' defaultValue={seeTitle} disabled/>
                        </div>
                        <div className='box__Item' style={{marginTop: "10px"}}>
                            <label htmlFor='auth'>Author</label>
                            <input type='text' name='auth' defaultValue={seeAuth} disabled/>
                        </div>
                        <div className='box__content'>
                            <label htmlFor='content'>Content</label>
                            <div className='box__content-detail'>
                                <div className='content-detail-temp' dangerouslySetInnerHTML={{__html: detailContent(seeContentDetail)}}></div>
                            </div>
                        </div>
                    </form>
                    <div className='btn-form'>
                        <button onClick={() => close()}>Close</button>
                    </div>
                </div>
            </div>
            {data.length === 0 ? 
                <>
                    {sessionStorage.user ?
                        <div className='blog-span_line'>
                            <h3>Not note!</h3>
                        </div>
                        : 
                        ""
                    }
                </>
             :
                <BtnBlogs numberPage={resetPage}/>
            }
        </div>
    );
};

export default Bloger;