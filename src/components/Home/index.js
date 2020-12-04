import React, { useEffect, useState } from 'react';

import './styles.css';
import Banner from '../Banner';
import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';

function Home() {

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
    <div className="home__container">
      <div className={whiteHeader ? "white__header" : ""}>
        <Header whiteHeader={whiteHeader} />
      </div>

      <Banner title='Um mundo inteiro perto de você' description='Acomode-se em um lugar novo. Descubra lugares perto de você para morar, trabalhar ou simplesmente relaxar.' date={true} button={true} />

      <div className="home__section">
        <Card
          src=' https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=480'
          title='Online experiences'
          description='Unique activities we can do together, led by a world of hosts.'
        />

        <Card
          src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480'
          title='Unique stays'
          description='Spaces that are more than just a place to sleep.'
        />

        <Card
          src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480'
          title='Entire homes'
          description='Comfortable private places, with room for friends or family.'
        />
      </div>

      <div className="home__section online__experience">

        <div className="title__description">
          <h2>Destaques da semana</h2>

          <p>Conheça pessoas do mundo inteiro enquanto experimenta algo novo. Participe de sessões de vídeo interativas ao vivo oferecidas por anfitriões excepcionais — tudo isso sem sair de casa.</p>
        </div>
        
        <Card
          src='https://thumbcdn-4.hotelurbano.net/De4OYQ3kG8LVY-e0dagayujjmJc=/trim:bottom-right:80/620x338/https%3A//novo-hu.s3.amazonaws.com/reservas/ota/prod/hotel/849/pousada-porto-praia-arraial-do-cabo-rj-001_20180427173925.png'
          title='Quarto inteiro em casa hospedado por Jennifer'
          description='450 SF Large Private Bedroom with desk.'
          price='R$170/ noite'
        />

        <Card
          src='https://thumbcdn-1.hotelurbano.net/iGZpfwiu--34nq_CshSYUMzTe54=/trim:bottom-right:80/620x338/https%3A//i.travelapi.com/hotels/1000000/50000/48600/48544/c3f4a6e2_z.jpg'
          title='Quarto inteiro em townhouse hospedado por Erika'
          description='Wonderful B queen bedroom with bathroom upstairs'
          price='R$158/ noite'
        />

        <Card
          src='https://thumbcdn-3.hotelurbano.net/aPMAB2X1LBNnZqQa-zsvdU49haY=/trim:bottom-right:80/620x338/https%3A//novo-hu.s3.amazonaws.com/reservas/ota/prod/hotel/531759/hotel-sky-gramado-hurb-001_20191219164626.jpg'
          title='Quarto inteiro em casa hospedado por Valur'
          description='Private Room w 2bed/10 min to Strip/TV/Wifi/Park'
          price='R$173/ noite'
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;