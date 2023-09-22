// EarthquakeCard.js
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const EarthquakeCard = ({ earthquake }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Paragraph>Yer: {earthquake.location}</Paragraph>
        <Paragraph>Şiddet: {earthquake.mag}</Paragraph>
        <Paragraph>Derinlik: {earthquake.depth} km</Paragraph>
        <Paragraph>Tarih: {earthquake.date} km</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default EarthquakeCard;
