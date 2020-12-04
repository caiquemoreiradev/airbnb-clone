import React from 'react';

import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import './styles.css';
import RoomsResults from '../RoomsResults';

function Rooms() {
    return (
        <div className="rooms__container">

            <div className="rooms_top__infos">
                <div className="left">
                    <h2>Acomodações únicas com self check-in</h2>
                    <h4>Relaxe em uma acomodação extraordinária perto de você</h4>
                </div>

                <div className="right">
                    <p>1 / 9</p>
                    <ChevronLeft />
                    <ChevronRight />
                </div>
            </div>

            <div className="rooms">
                <RoomsResults
                    img='https://a0.muscache.com/im/pictures/89638cf0-6de9-4b1e-bd3b-daf81d54aaa7.jpg?im_w=720'
                    title='Cabanas nas Árvores em Campos do Jordão'
                    location='Casa na árvore hospedado por Andre'
                    price='R$ 594/noite'
                    stars={4.2}
                />

                <RoomsResults
                    img='https://a0.muscache.com/im/pictures/5f5aca4a-90cb-41cd-9925-a56bf2ef1869.jpg?im_w=720'
                    title='Sítio de luxo na serra piscina/jacuzzi/7quartos'
                    location='Vila inteira hospedado por Elaine'
                    price='R$ 520/noite'
                    stars={4.9}
                />

                <RoomsResults
                    img='https://a0.muscache.com/im/pictures/e05957fa-6b29-452a-87e0-1313ff86b17e.jpg?im_w=1200'
                    title='Microcasa 03 em Sorocaba bairro Alto da Boa Vista'
                    location='Microcasa hospedado por William'
                    price='R$ 62/noite'
                    stars={4.6}
                />
                <RoomsResults
                    img='https://a0.muscache.com/im/pictures/bf5aed62-ac5c-4627-8524-4e05a19555a4.jpg?im_w=1200'
                    title='Tchau rotina! Fique em um trailer na Mantiqueira.'
                    location='Trailer hospedado por Juliana'
                    price='R$ 200/noite'
                    stars={4.8}
                />

            </div>

            <div className="link__container">
                <h2>Mostrar todas as acomodações</h2>
                <ChevronRight />
            </div>
        </div>
    );
}

export default Rooms;