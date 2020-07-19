import React from 'react';
import logo from '../asset/logo.png';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export const InitPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Speed dating app AV21
        </p>
        <Link to="/personal">
          <Button text="Začít registraci" type="primary"/>
        </Link>
      </header>
    </div>
  )
}
