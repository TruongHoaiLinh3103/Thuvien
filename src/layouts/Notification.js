"use client";

import React, { useEffect, useState } from 'react';
import "../styles/notification.scss";
import axios from 'axios';

const Notification = () => {
    const [notification,setNotification] = useState([]);
    const [checkNotification, setCheckNotification] = useState(false);
    useEffect(() => {
        if(sessionStorage.user){
            axios.get(`http://localhost:4000/notification?keyword=${sessionStorage.user}`).then((res) => {
                if(res && res.data && res.data.data && res.data.data.data){
                    if(res.data.data.data.length > 0){
                        setNotification(res.data.data.data);
                    }else{
                        setCheckNotification(true)
                    }
                }
            })
        }else{
            setCheckNotification(true)
        }
    })
    return (
        <div className='Notification'>
           {checkNotification ? 
                <p style={{textAlign:"center"}}><i>There are no announcements here!</i></p>
           :
                notification.map((item) => {
                    return(
                        <div className='Notification-item' key={item.id}>
                            <div className='Notification-item_img'>
                                <img src={item.img} alt='avatar'/>
                            </div>
                            <p><b>{item.user}</b> {item.notification} {item.name}</p>
                        </div>
                    )
                })
           }
        </div>
    );
};

export default Notification;