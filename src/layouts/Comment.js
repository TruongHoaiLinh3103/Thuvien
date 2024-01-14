import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faPaperPlane, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import "../styles/comment.scss";
import { printfID } from '@/utils/ViewURL';
import BntPage from '@/components/BntPage';
import { useRouter } from 'next/navigation';

const Comment = (props) => {
    const [comment, setComment] = useState([]);
    const [editComment, setEditComment] = useState(0);
    const [cmtEdit, setCmtEdit] = useState("");
    const [numberPage, setNumberPage] = useState(1);
    const [likeComment, setLikedComment] = useState([]);
    const cmt = useRef("");
    const router = useRouter();
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
    const addComment = (item) => {
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
                productName: item.name,
                menu: item.menu
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
    const addCommentEnter = (e, item) => {
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
                    productName: item.name,
                    menu: item.menu
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
    const likeAComment = (commentId) => {
        if(sessionStorage.user){
            axios.post(
                "http://localhost:4000/likes",{ commentId: commentId }, {
                    headers: {
                        accessToken: sessionStorage.getItem("accessToken")
                    }
                }
            ).then((res) => {
                setLikedComment(
                    likeComment.map((cmt) => {
                        if (cmt.id === commentId) {
                            if (res.data.liked) {
                                return { ...cmt, Likes: [...cmt.Likes, 0] };
                            } else {
                                const likesArray = cmt.Likes;
                                likesArray.pop();
                                return { ...cmt, Likes: likesArray };
                            }
                        } else {
                            return cmt;
                        }
                    })
                );
            });
        }
        else{
            alert("User not logged in!");
            router.push("/user")
        }
    };
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
                    <input type='text' placeholder='Thêm bình luận...' ref={cmt} onKeyDown={(e) => addCommentEnter(e, props.data)}/>
                    <FontAwesomeIcon icon={faPaperPlane} onClick={() => addComment(props.data)}/>
                </div>
                <div className='ProductID-cmt-box'>
                    {comment.map((item) => {
                        return(
                            <div className='cmt-box_item' key={item.id}>
                                <div className='avatarAndAuth'>
                                    <img src={item.img} alt='Avatar' className="avatarAndAuth-img"/>
                                    <div className='Auth'>
                                        <h3>{item.user}</h3>
                                        <div style={{margin: "0px"}}>{item.updatedAt}</div>
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
                                            <span onClick={() => likeAComment(item.id)}><FontAwesomeIcon icon={faHeart} /> {item.Likes.length}</span>
                                            <span><FontAwesomeIcon icon={faComment} /> trả lời</span>
                                            {sessionStorage.user === item.user &&
                                                <>
                                                    <span onClick={() => openUpdateCMT(item)}><FontAwesomeIcon icon={faPencil} /> sửa</span>
                                                    <span onClick={() => deleteComment(item.id)}><FontAwesomeIcon icon={faTrash} /> xóa</span>
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