"use client";

import React, { useRef } from 'react';
import "../styles/contactdetail.scss";
// import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons';

// const Edit = dynamic(() => import("./Edit"),{ssr: false});

const ContactDetail = () => {
    const Name = useRef(null);
    const Email = useRef(null);
    const Tel = useRef(null);
    const Title = useRef(null);
    const Content = useRef(null)
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
                    <form>
                        <div className='form_profile'>
                            <input type='text' placeholder='Fullname(*)' ref={Name} onChange={() => {console.log(Name.current.value)}}/>
                            <input type='email' placeholder='Email(*)' ref={Email} onChange={() => {console.log(Email.current.value)}}/>
                            <input type='tel' placeholder='Telephone(*)' ref={Tel} onChange={() => {console.log(Tel.current.value)}}/>
                            <input type='text' placeholder='Title(*)' ref={Title} onChange={() => {console.log(Title.current.value)}}/>
                        </div>
                        <textarea className='content_Textarea' placeholder='Content(*)' ref={Content} onChange={() => {console.log(Content.current.value)}}/>
                        <div className='ContactDetail-body-Item-btn'>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;