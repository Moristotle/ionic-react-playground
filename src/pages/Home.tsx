import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton
} from '@ionic/react';
import React, { useState } from 'react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import { Plugins, CameraResultType } from '@capacitor/core';

import Item from '../components/Item';

const Home: React.FC<RouteComponentProps> = props => {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState();

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Playground</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonList>
        <Item label="Create Idea" note="Run Idea By Mori" days={6} />
        <Item label="Implement Idea" note="Run Idea By John" days={2} />
        <Item label="QA Idea" note="Run Idea By Devlin" days={3} />
      </IonList>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => props.history.push('/new')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>

      <IonContent className="ion-padding">
        <img src={photo} alt="native camera" />
        <br />
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
        <IonButton onClick={() => setPhoto('')}>Remove Photo</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
