import React, { useEffect, useState } from 'react';

import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Card';
import CardLocations from '../CardLocations';
import Banner from '../Banner';
import InfosAirBnb from '../InfosAirBnb';
import { Link } from 'react-router-dom';
import Rooms from '../Rooms';

function SearchPage() {
    const [whiteHeader, setWhiteHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 50) {
                setWhiteHeader(true);
            }
            else {
                setWhiteHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div className="searchPage__container">
            <div className={!whiteHeader ? "white__header" : "header"}>
                <Header whiteHeader={whiteHeader} />
            </div>

            <Banner
                title='Encontre um novo lar para sua rotina'
                description='Acomode-se em um lugar novo. Descubra lugares perto de você para morar, trabalhar ou simplesmente relaxar.'
                button={false}
                date={false}
            />

            <div className="card__locations">
                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/93d5208f-80c8-4933-85a5-342b8eab74ac.jpg?aki_policy=large'
                        title='São Sebastião'
                        price='R$ 458/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/e1e14c91-e3a1-4238-a4fd-09a652acfddf.jpg?aki_policy=large'
                        title='São Roque'
                        price='R$ 495/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/6f9006ce-ee5c-468d-8ce2-b8ad346bc7a2.jpg?aki_policy=large'
                        title='Ilha Bela'
                        price='R$ 362/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/e49b8025-bbf1-4d2f-b641-ace755b0f2cf.jpg?aki_policy=large'
                        title='Mairinque'
                        price='R$ 769/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/1a7997b8-f053-410d-a857-bcb182430f9d.jpg?aki_policy=large'
                        title='Ubatuba'
                        price='R$ 305/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/9cfa30f2-c940-44b1-ae88-b32468fcd6fe.jpg?aki_policy=large'
                        title='Campos do Jordão'
                        price='R$ 407/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/e446fdfb-cf02-4eb0-b538-664981cbab02.jpg?aki_policy=large'
                        title='Caraguatatuba'
                        price='R$ 356/noite'
                    />
                </Link>

                <Link to='page-results'>
                    <CardLocations
                        img='https://a0.muscache.com/im/pictures/4c1dfcf8-09be-48aa-a4d6-de4359986027.jpg?aki_policy=large'
                        title='Mairiporã'
                        price='R$ 661/noite'
                    />
                </Link>
            </div>

            <div className="searchPage__section">
                <Card
                    src='https://a0.muscache.com/im/pictures/ea126ca5-6a02-4742-af1f-cb0e404180de.jpg?im_w=480'
                    title='Estadias longas'
                    description='Acomode-se e experimente a vida em um lugar novo com estadias aconchegantes de um mês ou mais.'
                />

                <Card
                    src='https://a0.muscache.com/im/pictures/3c979022-9817-4b41-85e7-f586f5f3f277.jpg?im_w=480'
                    title='Trabalhe ou estude onde quer que você esteja'
                    description='Troque a sala de aula ou o escritório em casa por uma acomodação prática com Wi-Fi.'
                />

                <Card
                    src='https://a0.muscache.com/im/pictures/47d3d81e-1c82-4bc6-928d-ecfaa4b9f456.jpg?im_w=480'
                    title='Acomodações ideais para famílias'
                    description='Fuja das paredes de sempre e relaxe com a família nestas casas inteiras perto de você.'
                />
            </div>

            <div className="acomodations">
                <Rooms />
            </div>

            <div className="infos__airbnb">
                <InfosAirBnb />
            </div>

            <Footer />
        </div>
    );
}

export default SearchPage;