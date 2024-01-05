"use client";

import React, { useEffect, useRef, useState } from 'react';
import "../styles/latestcomments.scss";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import "../styles/productid.scss";
import "../styles/comment.scss";

const LatestComments = () => {
    const [comment, setComment] = useState([]);
    const [editComment, setEditComment] = useState(0);
    const [cmtEdit, setCmtEdit] = useState("");
    const [numberPage] = useState(1);
    const cmt = useRef("");
    const openUpdateCMT = (item) => {
        setEditComment(item.id);
        setCmtEdit(item.comment);
    }
    const updateComment = (e, id) => {
        if(e.which === 13){
            const data = {comment: cmtEdit}
            axios.patch(`http://localhost:4000/comment/${id}`, data, {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }).then((res) => {
                setEditComment(0)
            })
        }
    }
    const deleteComment = (id) => {
        axios.delete(`http://localhost:4000/comment/${id}`,{
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then((res) => {
            setComment(comment.filter(item => item.id !== id))
        })
    }
    const addComment = () => {
        if(cmt.current.value === ""){
            cmt.current.focus();
        }
        else{
            const data = {
                img: sessionStorage.avatar,
                user: sessionStorage.user,
                comment: cmt.current.value,
                productId: 0,
                productName: "Vô mục"
            }
            axios.post("http://localhost:4000/comment", data, 
            {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }
            ).then((res) => {
                if(res.data.error){
                    alert("User not logged in!")
                }else{
                    cmt.current.value = "";
                    cmt.current.focus();
                }
            })
        }
    }
    const addCommentEnter = (e) => {
        if(e.which === 13){
            if(cmt.current.value === ""){
                cmt.current.focus();
            }
            else{
                const data = {
                    img: sessionStorage.avatar,
                    user: sessionStorage.user,
                    comment: cmt.current.value,
                    productId: 0,
                    productName: "Vô mục"
                }
                axios.post("http://localhost:4000/comment", data, 
                {
                    headers: {
                        accessToken: sessionStorage.getItem("accessToken")
                    }
                }
                ).then((res) => {
                    if(res.data.error){
                        alert("User not logged in!")
                    }else{
                        cmt.current.value = "";
                        cmt.current.focus();
                    }
                })
            }
        }
    }
    const itemProductName = (name) => {
        const str = name.slice(0,20);
        if(name === "Vô mục"){
            return name;
        }else{
            if(name.length <= str.length){
                return name;
            }
            else{
                const result = str.trim() + "...";
                return result;
            }
        }
    }
    const itemProductTime = (time) => {
        return time;
    }
    useEffect(() => {
        axios.get(`http://localhost:4000/comment?page=${numberPage}&limit=24&sortBy=desc&orderBy=id`).then((res) => {
            if(res && res.data && res.data.data && res.data.data.data){
                setComment(res.data.data.data)
            }
        });
    })
    return (
        <div className='LatestComments'>
            <h2><b>LATEST</b> COMMENTS</h2>
            <div className='ProductID-cmt-add'>
                <input type='text' placeholder='Thêm bình luận...' ref={cmt} onKeyDown={(e) => addCommentEnter(e)}/>
                <FontAwesomeIcon icon={faPaperPlane} onClick={() => addComment()}/>
            </div>
            <div className='LatestComments-cmt-box'>
                {comment.map((item) => {
                    return(
                        <div className='cmt-box_item' key={item.id}>
                            <div className='avatarAndAuth'>
                                <img src={item.img} alt='Avatar' className="avatarAndAuth-img"/>
                                <div className='Auth'>
                                    <h3>{item.user}</h3>
                                    <p style={{margin: "5px 0px"}}>{itemProductName(item.productName)}</p>
                                    <p style={{margin: "0px"}}>{itemProductTime(item.updatedAt)}</p>
                                </div>
                            </div>
                            <div className='cmtAndLike'>
                                {editComment !== item.id ?
                                    <p>{item.comment}</p>
                                    :
                                    <input type='text' autoFocus value={cmtEdit} onChange={(e) => {setCmtEdit(e.target.value)}} onKeyDown={(e) => updateComment(e, item.id)} style={{
                                        padding: "5px", fontSize: "15px", border: "none", outline: "none", color: "green"
                                    }}/>
                                }
                                <div className='LikeAndDislike'>
                                    <div>
                                        <span><FontAwesomeIcon icon={faHeart} /> {item.like}</span>
                                        <span><FontAwesomeIcon icon={faComment} /> {item.unchat}</span>
                                        {sessionStorage.user === item.user &&
                                            <>
                                                <span style={{color:"blue"}} onClick={() => openUpdateCMT(item)}><FontAwesomeIcon icon={faPencil} /></span>
                                                <span style={{color:"red"}} onClick={() => deleteComment(item.id)}><FontAwesomeIcon icon={faTrash} /></span>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default LatestComments;