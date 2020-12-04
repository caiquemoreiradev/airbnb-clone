import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, IconButton } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './styles.css';

function Header({ headerWhite }) {
    return (
        <div className={!headerWhite ? "header__container" : "white__header"}>
            <Link to='/'>
                <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="AirBnB Logo" className="header__icon" />
            </Link>

            <div className="header__center">
                <input placeholder='Comece sua jornada...' type="text" />
                <div className="search">
                    <SearchIcon />
                </div>
            </div>

            <div className="header__right">
                <p>Torne-se um anfitrião</p>
                <IconButton>
                    <LanguageIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

                <IconButton>
                    <Avatar src='https://avatars0.githubusercontent.com/u/56305107?s=460&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4' />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;