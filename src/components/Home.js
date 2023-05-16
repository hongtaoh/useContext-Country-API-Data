import { useNavigate } from 'react-router';
import { Button, Col, Container, Row } from 'react-bootstrap';
import React from 'react';

import atlas from '../assets/atlas.png'

const Home = () => {
  const navigate = useNavigate();

  const goToCountries = () => {
    navigate('/countries');
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <img width="100%" height="auto" src={atlas} alt="Political map of the world. Source: https://www.worldatlas.com/articles/how-many-countries-are-in-the-world.html"/>
        </Col>
        <Col>
          <h1>Select Your Countries in the World</h1>
          <p>We have over 200 countries/regions in the world. That's a lot of places, right? With so many places in mind, it's a good idea to take a look at all of them and select the countries/regions that you like the most.</p>
          <p>With this simple web App, you are able to browse through all countries/regions around the globe and select the ones that you like the best! You will see your selected countries in Favorites page.</p>
          <Button onClick={goToCountries}>Get Started Now!</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
