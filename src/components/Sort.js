import React, { useState } from 'react';
import "@/styles/sort.scss";

const Sort = ({ handleSort, handleList }) => {
    const [sort, setSort] = useState(false);
    return (
        <div className='Sort'>
            <button className='Sort-btn' onClick={() => handleSort("&_sort=id&_order=desc")}>Mới Nhất</button>
            <span>|</span>
            <button className='Sort-btn' onClick={() => handleSort("&_sort=rating&_order=desc")}>Đánh giá cao</button>
            <span>|</span>
            <button className='Sort-btn' onClick={() => setSort(true)}>Thể Loại</button>
            <div className='Sort-dash' style={{display: !sort ? "none" : "flex"}} onClick={() => setSort(false)}>
                <div className='Sort-dash-list'>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Kinh_dị")}>Kinh dị</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Xuyên_không")}>Xuyên không</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Ngôn_tình")}>Ngôn tình</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Hiện_đại")}>Hiện đại</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Cổ_đại")}>Cổ đại</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Truyện_18+")}>Truyện 18+</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Phim")}>Phim</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Trinh_thám")}>Trinh thám</button>
                    <span>|</span>
                    <button className='-dash-list_btn' onClick={() => handleList("&list_like=Thế_giới_khác")}>Thế giới khác</button>
                </div>
            </div>
        </div>
    );
};

export default Sort;