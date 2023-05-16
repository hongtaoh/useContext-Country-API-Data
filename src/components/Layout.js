// import { Container, Nav, Navbar } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import FavoriteCountryContext from './FavoriteCountryContext';

const Layout = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {' '}
            Country
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/countries">
              Countries
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ margin: '1rem' }}>
        <FavoriteCountryContext.Provider value={[favorites, setFavorites]}>
          <Outlet />
        </FavoriteCountryContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
