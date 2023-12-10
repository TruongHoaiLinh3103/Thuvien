"use client";
import React, { useState, useRef } from 'react';
import "../../styles/contactdetail.scss";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ContactDetail = () => {
    const [Content, setContent] = useState([]);
    const Name = useRef(null);
    const Email = useRef(null);
    const Tel = useRef(null);
    const Title = useRef(null);
    return (
        <div className='ContactDetail'>
            <h2><b>CONTACT</b> US</h2>
            <div className='ContactDetail-body'>
                <div className='ContactDetail-body-Item'>
                    <p>Bạn có bất kỳ thắc mắc nào hoặc có nhu cầu liên hệ hợp tác, vui lòng điền thông tin vào mẫu dưới đây. </p>
                    <p>Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất có thể. Trân trọng cảm ơn! </p>
                    <p>Công ty Nội thất LightShop</p>
                    <p>Văn phòng: 12/9, Tân Thới Nhất 5, Tân Thới Nhất, TP. HCM</p>
                    <p>Hotline: 0356381315</p>
                    <p>Email: truonghoailinh3103@gmail.com</p>
                </div>
                <div className='ContactDetail-body-Item'>
                    <form>
                        <div className='form_profile'>
                            <input type='text' placeholder='Họ và tên(*)' ref={Name} onChange={() => {console.log(Name.current.value)}}/>
                            <input type='email' placeholder='Email(*)' ref={Email} onChange={() => {console.log(Email.current.value)}}/>
                            <input type='tel' placeholder='Số điện thoại(*)' ref={Tel} onChange={() => {console.log(Tel.current.value)}}/>
                            <input type='text' placeholder='Tiêu đề(*)' ref={Title} onChange={() => {console.log(Title.current.value)}}/>
                        </div>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={Content}
                            onReady={ editor => {
                                editor.editing.view.change((writer) => {
                                    writer.setStyle("height", "150px", editor.editing.view.document.getRoot())
                                })
                            }}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setContent(...Content, data)
                                console.log(Content)
                            } }
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;