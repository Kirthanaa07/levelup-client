import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const GameCard = ({
  id,
  title,
  maker,
  numberOfPlayers,
  skillLevel,
}) => (
  <Card className="card-space" style={{ width: '18rem' }}>
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Title>By: {maker}</Card.Title>
      <Card.Text>{numberOfPlayers} players needed</Card.Text>
      <Link passHref href={`/games/${id}`}>
        <Button variant="success" className="">Edit</Button>
      </Link>
      <Button variant="danger" className=""> Delete</Button>
    </Card.Body>
    <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
  </Card>
);

GameCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default GameCard;
