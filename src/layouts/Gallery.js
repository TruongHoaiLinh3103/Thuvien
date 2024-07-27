import React from 'react';
import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';
import ViewProduct from '@/utils/ViewProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../styles/pagesection.scss";
import Loading from '@/components/Loading';
import { memo } from 'react';

const Gallery = ({ images, scrollPosition, addWL, handleRating }) => (
  <div className='PageSection-section_data'>
    {images.map((item) => {
      return(
          <div className='PageSection-section_data-card' key={item.id}>
              <LazyLoadImage scrollPosition = { scrollPosition }  placeholder={<Loading/>} className="data-card_product" src={item.img} alt={item.name} />
              <h4 className="data-card_title" title={item.name} style={{textAlign: "center", cursor:"pointer"}}
              ><ViewProduct name={item.name} id={item.id} menu={item.menu} text={item.text}></ViewProduct></h4>
              <div className="data-card_rating">
                  {handleRating(item.rating)}
              </div>
              <div className='data-card_btn'>
                  {item.menu === "comic" ?
                  <a className="button" onClick={() => addWL(item)}><FontAwesomeIcon icon={faHeart} /></a>
                  :
                  <a href={item.text} className="button"><FontAwesomeIcon icon={faBook} /></a>
                  }
              </div>
          </div>
      )
    })}
  </div>
);
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default memo(trackWindowScroll(Gallery));