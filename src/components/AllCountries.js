import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Country from './Country'

export default function AllCountries(){

  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
    })
  }, []);


  return (
    <div>
    <h2>All countries</h2>
    <Container fluid>
      <Row>
        {
          countries.map(cntry => (
            <Col key={cntry.cca3} xs={12} sm={6} md={4} xl={2}>
            <Country {...cntry}/>
            </Col>
          ))
        }
      </Row>
    </Container>
    </div>
  )
}
