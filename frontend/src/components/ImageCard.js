import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>
          {image.title.charAt(0).toUpperCase() +
            image.title.slice(1).toLowerCase()}
        </Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="danger" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
