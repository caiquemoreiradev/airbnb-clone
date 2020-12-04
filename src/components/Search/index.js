import React, { useState } from 'react';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import PeopleIcon from '@material-ui/icons/People';

import './styles.css';
import { Button } from '@material-ui/core';

function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search__container">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

            <div className="search__formContainer">
                <h2>
                    Número de convidados
                <PeopleIcon />
                </h2>

                <input
                    className='input__guests'
                    type="number"
                    min={0}
                    defaultValue={2}
                />

                <Button variant='outlined'>Pesquisar AirBnB</Button>
            </div>
        </div>
    );
}

export default Search;