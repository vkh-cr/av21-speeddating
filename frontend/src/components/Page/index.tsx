import React from 'react';

import { Container } from './styles';

export const Page: React.FC = ({children}) => {

  return (
    <Container>
      {children}
    </Container>
  );
};
