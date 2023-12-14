import React from 'react';
import "../styles/footer.scss";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='Footer maxWidth1400px'>
            <div className='Footer-item'>
                <h3>Liên hệ với chúng tôi</h3>
                <ul>
                    <li><p>Văn phòng: 12/9, Tân Thới Nhất 5, Tân Thới Nhất, TP. HCM </p></li>
                    <li><p>Hotline: <Link href='tel:0356381315'>0356381315</Link></p></li>
                    <li><p>Email: <Link href='mailto:truonghoailinh3103@gmail.com'>truonghoailinh3103@gmail.com</Link></p></li>
                </ul>
            </div>
            <div className='Footer-item'>
                <h3>Danh mục sản phẩm</h3>
                <ul>
                    <li><Link href="">Sản phẩm gia dụng</Link></li>
                    <li><Link href="">Trang trí phong thủy</Link></li>
                </ul>
            </div>
            <div className='Footer-item'>
                <h3>Công ty Nội thất LightShop</h3>
            </div>
        </div>
    );
};

export default Footer;