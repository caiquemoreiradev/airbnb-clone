import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

import './styles.css';

function RoomsResults({ img, location, title, stars, price }) {
    return (
        <div className="room_results__container">
            <img src={img} alt="Room" />

            <div className="infos__bottom">
                <div className="points">
                    <div className="stars">
                        <StarIcon />
                        <p>{stars}</p>
                    </div>
                    <FavoriteBorderIcon />
                </div>

                <h5>{title}</h5>

                <p>{location}</p>

                <strong>{price}</strong>
            </div>
        </div>
    );
}

export default RoomsResults;