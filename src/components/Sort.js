import React, { useState } from 'react';
import "@/styles/sort.scss";
import { memo } from 'react';
import { usePathname } from 'next/navigation';

const Sort = ({ handleSort, handleList, handleListDocument }) => {
    const pathname = usePathname();
    const [sort, setSort] = useState(false);
    return (
        <>
            {pathname === "/product/document" && 
                <div className='Sort'>
                    <button className='Sort-btn' onClick={() => setSort(true)}>Thể Loại</button>
                    <div className='Sort-dash' style={{display: !sort ? "none" : "flex"}} onClick={() => setSort(false)}>
                        <div className='Sort-dash-list'>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Animation")}>Chuyển động</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Design")}>Thiết kế</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Personal")}>Cá nhân hóa</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Check")}>Kiểm tra</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Icon")}>Biểu tượng</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Convert")}>Chuyển đổi</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Tool")}>Công cụ</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Ingredients")}>Thành phần</button>
                            <span>|</span>
                            <button className='-dash-list_btn' onClick={() => handleListDocument("&list_like=Other-options")}>Ngôn ngữ</button>
                        </div>
                        <button className='-dash-list_btn' onClick={() => handleListDocument("")}>Thoát</button>
                    </div>
                </div>
            }
            {pathname === "/product/comic" &&
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
                        </div>
                        <button className='-dash-list_btn' onClick={() => handleList("")}>Thoát</button>
                    </div>
                </div>
            }
        </>
        
    );
};

export default memo(Sort);
