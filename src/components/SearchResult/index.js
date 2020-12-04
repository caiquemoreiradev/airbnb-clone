import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

import './styles.css';

function SearchResult({
  img,
  location,
  title,
  description,
  stars,
  price,
  total
}) {
  return (
    <div className="searchResult__container">
      <img src={img} alt="Room" />
      <FavoriteBorderIcon className='searchResult__heart' />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>________</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon />
            <div className="searchResults__star">
              <strong>{stars}</strong>
            </div>
            <div className="searchResults__price">
              <h2>{price}</h2>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;