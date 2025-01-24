// import Header from '../customComponents/header';
import UserForm from '../customComponents/UserForm';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, Image } from "@chakra-ui/react";
import PropTypes from 'prop-types';

function SavedCountries( { favorites = [], countries }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
      };
    

    return (
       <> 
        <div>
             <Button className ="BackButton" onClick={handleBackClick}>Back</Button>
           </div>
        <div>
            <h1 className="SavedContriesTitle">My Saved Countries</h1>
             <main className="cardContainer">
             {favorites && favorites.length > 0 ? (
          favorites.map(country => (
                                <Card.Root className='cardRoot' key={country.cca3}>
                                    <Image
                                        src={country.flags.png}
                                        alt="Image of {country.name.common}"
                                    />
                                    <Card.Header className='cardHeader'>{country.name.common}</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <ul>
                                            <li>Population: {country.population}</li>
                                            <li>Region: {country.region}</li>
                                            <li>Capital: {country.capital}</li>
                                        </ul>
            
                                    </Card.Body>
                                </Card.Root>
                            ))
                        ) : (
                            <p>No saved countries yet.</p>
                          )}
                        </main>
        </div>
        <UserForm countries={countries} />
        </>
    )
}
export default SavedCountries;

SavedCountries.propTypes = {
    favorites: PropTypes.array,
    countries: PropTypes.array.isRequired
  };