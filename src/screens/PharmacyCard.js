// PharmacyCard.js
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const PharmacyCard = ({ pharmacy }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Title>{pharmacy.name}</Title>
        <Paragraph>İlçe: {pharmacy.district}</Paragraph>
        <Paragraph>Semt: {pharmacy.neighborhood}</Paragraph>
        <Paragraph>Adres: {pharmacy.address}</Paragraph>
        <Paragraph>Telefon: {pharmacy.phone}</Paragraph>
        <Paragraph>Çalışma Saati: {pharmacy.watchType}</Paragraph>
        
      </Card.Content>
    </Card>
  );
};

export default PharmacyCard;
