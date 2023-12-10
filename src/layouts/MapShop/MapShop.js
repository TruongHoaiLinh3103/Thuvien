import React from 'react';
import "../../styles/map.scss";

const MapShop = () => {
    return (
        <div className='MapShop'>
            <h2><b>COMPANY</b> LOCATION</h2>
            <div className='MapShop-Detail'>
                <div className='MapShop-Detail_location'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.676924801197!2d106.61073737481892!3d10.836017458092249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bcce986a785%3A0x6538604bf47e8288!2zMTIgVMOibiBUaOG7m2kgTmjhuqV0IDUsIFTDom4gVGjhu5tpIE5o4bqldCwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699268326633!5m2!1svi!2s" 
                    width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default MapShop;