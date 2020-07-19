import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageUploader from "react-images-upload"
import axios from 'axios'

import Button from "../components/Button";
import { Container } from '../components/Button/styles'
import { Header } from "../components/Header";
import { Page } from "../components/Page";

import { AppContext } from "../App";

export const PhotoPage = () => {
  const [picture, setPicture] = useState<File | null>(null);

  const onDrop = (picture: any, appContext: any) => {
    setPicture(picture[0])
    appContext.set({ ...appContext.get, image: picture[0] })
    console.log(appContext.get)
  }

  const sendData = async (appContext: any) => {
    console.log(appContext.get)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const bodyFormData = new FormData();
    bodyFormData.set("personalInfo", JSON.stringify(appContext.get))
    bodyFormData.append("image", appContext.get.image)
    // TODO: Add URL of server somehow. 
    await axios.post('http://192.168.0.51:3200/register', bodyFormData, config)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <AppContext.Consumer>
      {appContext => appContext && (<Page>
        <Header />
        {picture ? (
          <div>
            <img src={URL.createObjectURL(picture)} alt="Tvoje fotecka" width="200px" />
          </div>
        ) : <ImageUploader
            withIcon={false}
            buttonText='Vyber svuj portret'
            onChange={(pict) => onDrop(pict, appContext)}
            label="Max 5MB, akceptujeme .JPG a .PNG "
            imgExtension={['.jpg', '.png',]}
            maxFileSize={5242880}
            singleImage={true}
            buttonStyles={{ Container }}
          />}

        <div onClick={()=> sendData(appContext)}>
          <Button text="DOKONČI REGISTRACI" type="primary" />
        </div>

        <div onClick={() => setPicture(null)}>
          <Button text="Reset" type="secondary" />
        </div>
      </Page>)}
    </AppContext.Consumer>
  );
};
