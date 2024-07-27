import React, { useState } from 'react';
import "@/styles/sort.scss";
import { memo } from 'react';

const Sort = ({ handleSort, handleList }) => {
    const [sort, setSort] = useState(false);
    return (
        <div className='Sort'>
            <button className='Sort-btn' onClick={() => handleSort("&_sort=id&_order=desc")}>Mới Nhất</button>
            <span>|</span>
            <button className='Sort-btn' onClick={() => handleSort("&_sort=rating&_order=desc")}>Đánh Giá Cao</button>
            <span>|</span>
            <button className='Sort-btn' onClick={() => setSort(true)}>Thể Loại</button>
            <div className='Sort-dash' style={{display: !sort ? "none" : "flex"}} onClick={() => setSort(false)}>
                <div className='Sort-dash-list'>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Kinh-dị")}>Kinh dị</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Phiêu-lưu")}>Phiêu lưu</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Ngôn-tình")}>Ngôn tình</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Mưu-sự")}>Mưu sự</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Dị-giới")}>Dị giới</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Truyện-18")}>Truyện 18+</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Phim")}>Phim</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Trinh-thám")}>Trinh thám</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Truyện-cười")}>Truyện cười</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("")}>Thoát</button>
                </div>
            </div>
        </div>
    );
};

export default memo(Sort);