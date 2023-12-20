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
            <h2><b>LIÊN </b>HỆ</h2>
            <div className='ContactDetail-body'>
                <div className='ContactDetail-body-Item'>
                    <p>Bạn có bất kỳ thắc mắc nào, vui lòng điền thông tin vào mẫu dưới đây.</p>
                    <p>Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất có thể.</p>
                    <p><FontAwesomeIcon icon={faMapLocation} /> 12/9, Tân Thới Nhất 5, Tân Thới Nhất, TP. HCM</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> truonghoailinh3103@gmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 0356381315</p>
                    <p>Trân trọng cảm ơn!</p>
                </div>
                <div className='ContactDetail-body-Item'>
                    <form>
                        <div className='form_profile'>
                            <input type='text' placeholder='Họ và tên(*)' ref={Name} onChange={() => {console.log(Name.current.value)}}/>
                            <input type='email' placeholder='Email(*)' ref={Email} onChange={() => {console.log(Email.current.value)}}/>
                            <input type='tel' placeholder='Số điện thoại(*)' ref={Tel} onChange={() => {console.log(Tel.current.value)}}/>
                            <input type='text' placeholder='Tiêu đề(*)' ref={Title} onChange={() => {console.log(Title.current.value)}}/>
                        </div>
                        <textarea className='content_Textarea' placeholder='Nội dung(*)' ref={Content} onChange={() => {console.log(Content.current.value)}}/>
                        <div className='ContactDetail-body-Item-btn'>
                            <button>Gửi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;