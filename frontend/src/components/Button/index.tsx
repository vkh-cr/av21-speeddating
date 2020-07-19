import React from 'react';

import { Container } from './styles';

type ButtonType = 'primary' | 'secondary'

interface IProps {
  text: string,
  type: ButtonType
  onClick?: any
}

const Button = ({ text, type, ...props }: IProps) => {

  return (
    <Container >
      <div>{text}</div>
    </Container>
  );
};

export default Button;
