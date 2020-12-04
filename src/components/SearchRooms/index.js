import React from 'react';

import { Button } from '@material-ui/core';
import SearchResult from '../SearchResult';
import Header from '../Header';
import Footer from '../Footer';

import './styles.css';

function SearchRooms() {
    return (
        <div className="searchRooms__container">

            <Header />

            <div className="searchPage__info">
                <p>
                    62 acomodações, 29 de Setembro até 30 de Outubro, 2 pessoas
            </p>

                <h1>Acomodações nos arredores</h1>

                <Button variant='outlined'>Flexibilidade de cancelamento</Button>

                <Button variant='outlined'>Tipo de acomodação</Button>

                <Button variant='outlined'>Preço</Button>

                <Button variant='outlined'>Quartos e camas</Button>

                <Button variant='outlined'>Mais filtros</Button>
            </div>

            <SearchResult
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room on center of London'
                title='Stay at this spacious barbarian house'
                description='1 guest, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free parking, Washing Machine'
                stars={4.73}
                price="R$ 156 / night"
                total='R$ 348 total'
            />

            <SearchResult
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room on center of London'
                title='Stay at this spacious barbarian house'
                description='1 guest, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free parking, Washing Machine'
                stars={4.73}
                price="R$ 156 / night"
                total='R$ 348 total'
            />

            <SearchResult
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room on center of London'
                title='Stay at this spacious barbarian house'
                description='1 guest, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free parking, Washing Machine'
                stars={4.73}
                price="R$ 156 / night"
                total='R$ 348 total'
            />

            <SearchResult
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room on center of London'
                title='Stay at this spacious barbarian house'
                description='1 guest, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free parking, Washing Machine'
                stars={4.73}
                price="R$ 156 / night"
                total='R$ 348 total'
            />

            <SearchResult
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room on center of London'
                title='Stay at this spacious barbarian house'
                description='1 guest, 1 bedroom, 1 bed, 1.5 shared bathrooms, Wifi, Kitchen, Free parking, Washing Machine'
                stars={4.73}
                price="R$ 156 / night"
                total='R$ 348 total'
            />

            <Footer />
        </div>
    );
}

export default SearchRooms;