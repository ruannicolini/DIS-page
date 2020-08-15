import React from 'react';

import { Container, Content, Footer, LacoImg } from './styles';

// import logo from '../../assets/logodisalgados.png';
import logo from '../../assets/logoSmall2.png';

const Manutencao: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="DiSalgados" />
          <h1>Site em construção</h1>
          <LacoImg></LacoImg>
        </Content>

        <Footer>
          <h3>Contato</h3>
          <strong>(33)99937-8423</strong>
          <p>EDUARDO MENEGUSSI 93, NORTE</p>
          <p>RESPLENDOR/MG</p>
          <p>35230-000</p>
        </Footer>
      </Container>
    </>
  );
};

export default Manutencao;
