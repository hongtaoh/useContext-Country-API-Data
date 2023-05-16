import { useState, useEffect, useContext } from 'react';
import Country from './Country';
import { Button, Container, Row, Col } from 'react-bootstrap';
import FavoriteCountryContext from './FavoriteCountryContext';

export default function FavoriteCountries() {
  const [favorites, setFavorites] = useContext(FavoriteCountryContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    // if this is inside useeffect, it's always outputing empty array
    // putting it right below setCountries(data) outputs the same empty array
    // console.log(countries)
  }, []);

  // have to move it outside the useeffect block. Why?
  // console.log(countries)

  const favCountriesData = countries.filter(c => favorites.includes(c.cca3))

  return (
    <div>
      <h2>Favorite Countries</h2>
      <p>You have favorited {favorites.length} countries/regions in the world!</p>
      <Container fluid>
        <Row>
          {
            favCountriesData.map(cntry => (
              <Col key={cntry.cca3} xs={12} sm={6} md={4} xl={2}>
              <Country {...cntry}/>
              </Col>
            ))
          }
        </Row>
    </Container>
    </div>
  );
}
