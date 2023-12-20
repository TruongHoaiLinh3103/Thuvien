'use client';

import React, { useEffect, useState, useRef } from 'react';
import "../styles/blog.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BtnBlogs from '@/components/BtnBlogs';

const Bloger = () => {
    const [data, setData] = useState([]);
    const [isLooding, setLooding] = useState(true);
    const [modal, setModal] = useState(false);
    const [nameBtn, setNameBtn] = useState("");
    const [id, setId] = useState();
    const title = useRef("");
    const author = useRef("");
    const content = useRef("");
    const editItem = (item) => {
        setModal(true)
        setNameBtn("Change")
        setId(item.id);
        if(title.current.value === ''){
            title.current.value = item.title
        }
        if(author.current.value === ''){
            author.current.value = item.author
        }
        if(content.current.value === ''){
            content.current.value = item.content
        }
    }
    const addItem = () => {
        setModal(true)
        setNameBtn("Submit")
    }
    const submit = () => {
        if (title.current.value === '') {
            title.current.focus();
        }else if(author.current.value === ''){
            author.current.focus();
        }else if(content.current.value === ''){
            content.current.focus();
        } else {
            const dataBlog = {
                title: title.current.value,
                author: author.current.value,
                content: content.current.value
            }
            axios.post("http://localhost:4000/blog", dataBlog )
            .then((res) => toast.success("Đã cập nhật dữ liệu"))
            setModal(false);
        }
    }
    const updateData = () => {
        const dataBlog = {
            title: title.current.value,
            author: author.current.value,
            content: content.current.value
        }
        axios.patch(`http://localhost:4000/blog/${id}`, dataBlog)
        .then((res) => toast.success("Đã cập nhật dữ liệu"))
        setModal(false);
    }
    const close = () => {
        setModal(false);
        title.current.value = "";
        author.current.value = "";
        content.current.value = ""
    }
    const resetPage = async (Children) => {
        if(data.length > 0){
            const res = await axios.get(`http://localhost:4000/blog?page=${Children}&limit=4&sortBy=desc`)
            if(res && res.data && res.data.data && res.data.data.data){
                setData(res.data.data.data);
            }
        }
    }
    const deleteItem = (item) => {
        axios.delete(`http://localhost:4000/blog/${item.id}`)
        .then((res) => toast.success("Đã cập nhật dữ liệu"))
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
    if (isLooding){return <p>Loading...</p>}
    return (
        <div className="blog">  
            <table>
                <caption>Blogs</caption>
                <thead>
                    <tr className='tr-desktop'>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                    </tr>
                </thead>
                {data.map((item) => {
                    return(
                        <tbody key={item.id}>
                            <tr className='tr-desktop'>
                                <td><span>{item.title}</span></td>
                                <td><span>{item.author}</span></td>
                                <td><span>{item.content}</span></td>
                                <td>
                                    <button onClick={() => editItem(item)}>Edit</button>
                                    <button onClick={() => deleteItem(item)}>Delete</button>
                                </td>
                            </tr>
                            <tr className='tr_Mobile'>
                                <td><h3>Title</h3></td>
                                <td><span>{item.title}</span></td>
                            </tr>
                            <tr className='tr_Mobile'>
                                <td><h3>Author</h3></td>
                                <td><span>{item.author}</span></td>
                            </tr>
                            <tr className='tr_Mobile'>
                                <td><h3>Content</h3></td>
                                <td><span>{item.content}</span></td>
                            </tr>
                            <tr className='btnTR_Mobile'>
                                <td className='btnTR_Mobile_td'>
                                    <button onClick={() => editItem(item)}>Edit</button>
                                    <button onClick={() => deleteItem(item)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
                <tfoot>
                    <tr><td><button onClick={() => addItem()}>Add blog</button></td></tr>
                </tfoot>
            </table>
            <div className='modal' style={{display: modal ? "flex" : "none"}}>
                <div className='box'>
                    <form>
                        <div>
                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' ref={title}/>
                        </div>
                        <div>
                            <label htmlFor='author'>Author</label>
                            <input type='text' name='title' ref={author}/>
                        </div>
                        <div>
                            <label htmlFor='content'>Content</label>
                            <textarea name='content' rows={10} cols={3} ref={content}></textarea>
                        </div>
                    </form>
                    <div className='btn-form'>
                        <button onClick={() => nameBtn === "Submit" ? submit() : updateData()}>{nameBtn}</button>
                        <button onClick={() => close()}>Close</button>
                    </div>
                </div>
            </div>
            <BtnBlogs numberPage={resetPage}/>
            <ToastContainer/>
        </div>
    );
};

export default Bloger;