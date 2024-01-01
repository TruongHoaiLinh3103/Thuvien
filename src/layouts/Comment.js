import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "../styles/comment.scss";
import { printfID } from '@/utils/ViewURL';
import BntPage from '@/components/BntPage';

const Comment = (props) => {
    const [comment, setComment] = useState([]);
    const [editComment, setEditComment] = useState(0);
    const [cmtEdit, setCmtEdit] = useState("");
    const [numberPage, setNumberPage] = useState(1);
    const cmt = useRef("");
    const resetPage = (childData) => {
        const id = printfID(props.id);
        setNumberPage(childData)
        axios.get(`http://localhost:4000/comment?keyword=${id}&page=${numberPage}&limit=9&sortBy=desc&orderBy=id`).then((res) => {
            if(res && res.data && res.data.data && res.data.data.data){
                setComment(res.data.data.data)
            }
        });
    }
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
    const addComment = (name) => {
        if(cmt.current.value === ""){
            cmt.current.focus();
        }
        else{
            let productid = printfID(props.id);
            const data = {
                img: sessionStorage.avatar,
                user: sessionStorage.user,
                comment: cmt.current.value,
                productId: productid,
                productName: name
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
    const addCommentEnter = (e, name) => {
        if(e.which === 13){
            if(cmt.current.value === ""){
                cmt.current.focus();
            }
            else{
                let productid = printfID(props.id);
                const data = {
                    img: sessionStorage.avatar,
                    user: sessionStorage.user,
                    comment: cmt.current.value,
                    productId: productid,
                    productName: name
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
    useEffect(() => {
        const id = printfID(props.id);
        axios.get(`http://localhost:4000/comment?keyword=${id}&page=${numberPage}&limit=9&sortBy=desc&orderBy=id`).then((res) => {
            if(res && res.data && res.data.data && res.data.data.data){
                setComment(res.data.data.data)
            }
        });
    })
    return (
        <>
            <div className='Comment-cmt'>
                <nav>
                    <h3>Bình luận</h3>
                </nav>
                <div className='ProductID-cmt-add'>
                    <input type='text' placeholder='Thêm bình luận...' ref={cmt} onKeyDown={(e) => addCommentEnter(e, props.data.name)}/>
                    <FontAwesomeIcon icon={faPaperPlane} onClick={() => addComment(props.data.name)}/>
                </div>
                <div className='ProductID-cmt-box'>
                    {comment.map((item) => {
                        return(
                            <div className='cmt-box_item' key={item.id}>
                                <div className='avatarAndAuth'>
                                    <img src={item.img} alt='Avatar' className="avatarAndAuth-img"/>
                                    <div className='Auth'>
                                        <h3>{item.user}</h3>
                                        <p style={{margin: "0px"}}>{item.updatedAt}</p>
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
                                                    <span style={{color:"blue"}} onClick={() => openUpdateCMT(item)}>edit</span>
                                                    <span style={{color:"red"}} onClick={() => deleteComment(item.id)}>delete</span>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {comment.length === 0 ? "" :
                    <BntPage numberPage={resetPage} id={props.id} data={props.data}/>
                }
            </div>
        </>
    );
};

export default Comment;