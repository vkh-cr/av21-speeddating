import React, { ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import { Header } from "../components/Header";
import { Page } from "../components/Page";

import { AppContext } from "../App";

export const PersonalInfoPage = () => {

  const myChangeHandler = (event: ChangeEvent<HTMLInputElement>, appContext: any) => {
    let nam = event.target.name;
    let val = event.target.value;
    appContext.set({ ...appContext.get, [nam]: val });
  };
  return (
    <AppContext.Consumer>
      {appContext => appContext && <Page>
        <Header />
        <div id="form">
          <div>
            <div>Jméno:</div>
            <div className="input">
              <input onBlur={event => myChangeHandler(event, appContext)} name="name" placeholder="Jmeno" />
            </div>
          </div>
          <div>
            <div>Příjmení:</div>
            <div className="input">
              <input
                onBlur={event => myChangeHandler(event, appContext)}
                name="surename"
                placeholder="Prijmeni"
              />
            </div>
          </div>
          <div>
            <div>Email:</div>
            <div className="input">
              <input
                onBlur={event => myChangeHandler(event, appContext)}
                name="email"
                placeholder="email"
                type="email"
              />
            </div>
          </div>
          <div>
            <div>Prezdivka:</div>
            <div className="input">
              <input
                onBlur={event => myChangeHandler(event, appContext)}
                name="nickname"
                placeholder="prezdivka"
              />
            </div>
          </div>
          <div>
            <div>Telefon:</div>
            <div className="input">
              <input
                onBlur={event => myChangeHandler(event, appContext)}
                name="phone"
                placeholder="+420 777 777 777"
              />
            </div>
          </div>
          <div>
            <input
              onBlur={event => myChangeHandler(event, appContext)}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            <label htmlFor="male">Male</label>
            <br />
            <input
              onBlur={event => myChangeHandler(event, appContext)}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label htmlFor="female">Female</label>
            <br />
          </div>
        </div>
        <Link to="/photo" onClick={() => alert(appContext.get.name)}>
          <Button text="Přejdi na další stránku" type="primary" />
        </Link>
      </Page>}

    </AppContext.Consumer>
  );
};
