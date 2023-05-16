import { Card, Button } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import FavoriteCountryContext from './FavoriteCountryContext';

const Country = (props) => {
    const [favorites, setFavorites] = useContext(FavoriteCountryContext);

    const addToFav = () => {
        setFavorites(oldFavs => [...oldFavs, props.cca3])
    }

    const removeFromFav = () => {
        setFavorites(oldFavs => oldFavs.filter(cntry => cntry !== props.cca3))
    }

    return <Card>
        <Card.Img varian="top" src={props.flags.png} />
        <p style={{ fontSize: "1rem"}}>{props.name.official}</p>
        <p style={{ fontSize: "0.9rem"}}>Capital city: {props.capital ?? ""}</p>
        {favorites.includes(props.cca3)? <Button variant="warning" onClick={removeFromFav}>Remove from favorites</Button>
        :<Button onClick={addToFav}>Add to favorites</Button>}
    </Card>
}

export default Country;