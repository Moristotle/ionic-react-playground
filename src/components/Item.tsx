import {
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge
} from '@ionic/react';
import React from 'react';

interface ItemProperties {
  label: string;
  note: string;
  days: number;
}

const Item: React.FC<ItemProperties> = ({ label, note, days }) => {
  return (
    <IonItem>
      <IonCheckbox slot="start" />
      <IonLabel>
        <h1> {label} </h1>
        <IonNote> {note} </IonNote>
      </IonLabel>
      <IonBadge color="success" slot="end">
        {days} days
      </IonBadge>
    </IonItem>
  );
};

export default Item;
