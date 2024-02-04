"use client";

import React, { useRef } from 'react';
import "../styles/contactdetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { contactForm } from '@/utils/ViewForm';
import axios from 'axios';

const ContactDetail = () => {
    const Name = useRef(null);
    const Email = useRef(null);
    const Tel = useRef(null);
    const Title = useRef(null);
    const Content = useRef(null);
    const sendMail = async () => {
        if(Name.current.value === ""){
            Name.current.focus();
        }else if(Email.current.value === ""){
            Email.current.focus();
        }else if(Tel.current.value === ""){
            Tel.current.focus();
        }else if(Title.current.value === ""){
            Title.current.focus();
        }else if(Content.current.value === ""){
            Content.current.focus();
        }else{
            const data = {
                fullname: Name.current.value,
                email : Email.current.value,
                content: `Tôi là ${Name.current.value}, đây là ý kiến của tôi: ${Content.current.value}, nếu bạn đọc được mail này, vui lòng liên hệ lại với tôi theo số điện thoại: ${Tel.current.value} và email: ${Email.current.value}. Chân thành cảm ơn!`,
                telephone: Tel.current.value,
                title: Title.current.value
            }
            const isValid = await contactForm.isValid(data);
            if(isValid){
                axios.post("http://localhost:4000/contact", data).then((res) => {
                    console.log(res.data);
                })
            }else{
                alert("Something is wrong here, please try again!")
            }
        }
    }
    return (
        <div className='ContactDetail'>
            <h2><b>CON</b>TACT</h2>
            <div className='ContactDetail-body'>
                <div className='ContactDetail-body-Item'>
                    <p>If you have any questions, please fill out the form below.</p>
                    <p>We will contact you as soon as possible.</p>
                    <p><FontAwesomeIcon icon={faMapLocation} /> 12/9, Tan Thoi Nhat 5, Tan Thoi Nhat, TP. HCM</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> truonghoailinh3103@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 0356381315</p>
                    <p>Sincerely thank you!</p>
                </div>
                <div className='ContactDetail-body-Item'>
                    <div className='form_profile'>
                        <input type='text' placeholder='Fullname(*)' ref={Name}/>
                        <input type='email' placeholder='Email(*)' ref={Email}/>
                        <input type='tel' placeholder='Telephone(*)' ref={Tel}/>
                        <input type='text' placeholder='Title(*)' ref={Title}/>
                    </div>
                    <textarea className='content_Textarea' placeholder='Content(*)' ref={Content}/>
                    <div className='ContactDetail-body-Item-btn'>
                        <button onClick={() => sendMail()}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;