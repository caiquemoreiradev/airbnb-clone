import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import './styles.css';
import Search from '../Search';

function Banner({ title, description, button, date }) {

    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner__container">

           {date ? (
                <div className="banner__search">

                {showSearch && <Search />}

                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'>
                    {showSearch ? 'Hide' : 'Search Dates'}
                </Button>
            </div>
           ) : (
               <div></div>
           )}

            <div className="banner__info">
                <h1>{title}</h1>

                <h5>{description}</h5>

                {button ? (
                    <Button onClick={() => history.push('/search')} variant='outlined'>Explore os arredores</Button>
                ) : (
                    <div></div>
                )}

            </div>
        </div>
    );
}

export default Banner;