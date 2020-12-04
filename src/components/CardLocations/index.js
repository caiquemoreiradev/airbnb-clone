import React from 'react';

import './styles.css';

function CardLocations({ img, title, price }) {
  return (
      <div className="cardLocations__container">
          <img src={img} alt="Location"/>

          <div className="card_location_infos">
              <h5>{title}</h5>
              <p>{price}</p>
          </div>
      </div>
  );
}

export default CardLocations;