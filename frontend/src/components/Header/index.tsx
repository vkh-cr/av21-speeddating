import React from 'react';
import logo from '../../asset/logo.png';

import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" width="50vh"/>
      <div>
        <h3> AV21 | Speed Dating</h3>
      </div>
    </Container>
  );
};

