import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Welcome to Images Gallery!</h1>
      <p>
        This is a simple React application that retrieves photos using the
        Unsplash API. In order to start, enter any search term in the input
        field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Unsplash API
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
