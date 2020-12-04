import React from 'react';

import LocalHospitalIcon from '@material-ui/icons/LocalHospitalOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';

import './styles.css';

function InfosAirBnb() {
  return (
      <div className="infos__container">
          <h2>Vamos viajar com segurança juntos</h2>

          <div className="info__points">
              <section>
                <LocalHospitalIcon />
                <h3>Cuide da sua saúde</h3>
                <p>Criamos protocolos avançados de higienização com a ajuda de especialistas, para acomodações e experiências, que protegerão você em todas as viagens.</p>
              </section>

              <section>
                <HomeIcon />
                <h3>Seja um bom vizinho</h3>
                <p>Trate o bairro e o espaço do seu anfitrião com respeito: use máscara, lave as mãos, evite aglomerações e mantenha 2 metros de distância sempre que possível.</p>
              </section>

              <section>
                <VerifiedUserIcon />
                <h3>Viaje com responsabilidade</h3>
                <p>Priorize sua segurança e esteja ciente das regras e expectativas locais em relação à COVID-19. Não viaje se você se expôs à COVID-19 ou tiver sintomas da doença.</p>
              </section>
          </div>
      </div>
  );
}

export default InfosAirBnb;