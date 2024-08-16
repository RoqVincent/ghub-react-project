// Create a new component, CardsPage.js
import React from 'react';
import Card from './Card';
import AddCard from './AddCard';

const CardsPage = () => {
  return (
    <div className='card-page'>
      <div>
      <AddCard />
      </div>
      <div className='card-box'>
      <Card />
      <Card />
      </div>
    </div>
  );
};

export default CardsPage;