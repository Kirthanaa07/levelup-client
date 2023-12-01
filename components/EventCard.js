import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game,
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{description}</Card.Header>
    <Card.Body>
      <Card.Title>{game}</Card.Title>
      <Card.Text>When: {date} at {time}</Card.Text>
      <Card.Text>By:{organizer}</Card.Text>
    </Card.Body>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
};

export default EventCard;
