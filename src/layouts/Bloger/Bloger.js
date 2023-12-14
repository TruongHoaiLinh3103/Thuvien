'use client';

import React, { useEffect, useState, useRef } from 'react';
import "../../styles/blog.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            fetch("https://zfakeapi.vercel.app/blogs", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.current.value,
                    author: author.current.value,
                    content: content.current.value
                })
            })
            .then((res) => res.json())
            .then((res) => toast.success("Đã cập nhật dữ liệu"))
            setModal(false);
        }
    }
    const updateData = () => {
        fetch(`https://zfakeapi.vercel.app/blogs/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.current.value,
                author: author.current.value,
                content: content.current.value
            })
        })
        .then((res) => res.json())
        .then((res) => toast.success("Đã cập nhật dữ liệu"))
        setModal(false);
    }
    const close = () => {
        setModal(false);
        title.current.value = "";
        author.current.value = "";
        content.current.value = ""
    }
    const deleteItem = (item) => {
        fetch(`https://zfakeapi.vercel.app/blogs/${item.id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((res) => toast.success("Đã cập nhật dữ liệu"))
    }
    useEffect(() => {
        fetch("https://zfakeapi.vercel.app/blogs")
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLooding(false)
        })
    })
    if (!data){return <p>No profile data</p>}
    if (isLooding){return <p>Loading...</p>}
    return (
        <div className="blog">  
            <table>
                <caption>Blogs</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.content}</td>
                            <td>
                                <button onClick={() => editItem(item)}>Edit</button>
                                <button onClick={() => deleteItem(item)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
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
            <ToastContainer/>
        </div>
    );
};

export default Bloger;