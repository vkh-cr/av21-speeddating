import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    position: relative;

  input {
    border: #00266F solid 1px;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    width: calc(100% - 30px);
    font-size: x-large; 
  }

  #form {
    display: flex;
    flex-direction: column;
  }

  div.input {
    width: auto;
    display: block;
  }
`;
