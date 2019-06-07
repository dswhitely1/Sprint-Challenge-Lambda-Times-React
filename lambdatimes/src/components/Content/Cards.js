import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  const {cards} = props;
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
      {cards.map( ( card, i ) => <Card card={card} key={i} /> )}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  props: PropTypes.shape( {
    cards: PropTypes.arrayOf( PropTypes.object )
  } )
};

export default Cards;