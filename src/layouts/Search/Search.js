import React from 'react';
import "../../styles/search.scss";
const Search = () => {
    return (
        <div className='Search'>
            <input type="search" list="lista-navegadores" placeholder="Digite o nome do navegador"
                autoComplete="on" />
            <ul className='Search-history'>
                <div className='Search-history_display'>
                    <li>Gia dụng</li>
                    <span>X</span>
                </div>
                <div className='Search-history_display'>
                    <li>Văn phòng</li>
                    <span>X</span>
                </div>
                <div className='Search-history_display'>
                    <li>Phong thủy</li>
                    <span>X</span>
                </div>
                <div className='Search-history_display'>
                    <li>Trang trí</li>
                    <span>X</span>
                </div>
                <div className='Search-history_display'>
                    <li>Áo khoác</li>
                    <span>X</span>
                </div>
                <div className='Search-history_display'>
                    <li>Quần Jean</li>
                    <span>X</span>
                </div>
                <div className='Search-history_display'>
                    <li>Mệt thôi rồi</li>
                    <span>X</span>
                </div>
            </ul>
        </div>
    );
};

export default Search;