import React, { useState, SetStateAction } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { PersonalInfoPage, InitPage, PhotoPage } from './pages'
import { Users } from './pages/Admin/Users';

export interface IPersonalInformation {
  name?: string;
  surname?: string;
  email?: string;
  nickname?: string;
  phone?: string;
  gender?: string;
  image?: string;
}

export interface IAppContext {
  get: IPersonalInformation,
  set: React.Dispatch<SetStateAction<IPersonalInformation>> | {}
}

export const AppContext = React.createContext<IAppContext>({get: {name: "", surname: "", email: "", nickname: "", phone: "", gender: "", image: ""}, set: {}})

const App = () => {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInformation>({name: "", surname: "", email: "", nickname: "", phone: "", gender: "", image: ""});

  const store = {
    get: personalInfo, set: setPersonalInfo
  };
  
  return (
    <AppContext.Provider value={store}>
      <Router>
        <Switch>
          <Route path="/personal">
            <PersonalInfoPage />
          </Route>
          <Route path="/photo">
            <PhotoPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <InitPage />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}


export default App;
