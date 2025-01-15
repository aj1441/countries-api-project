import { useEffect, useState } from 'react';
import { Card, Image } from "@chakra-ui/react";



function CountryCard() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // want to split this out between a function for the api call and the useEffect.. Want two seperate in case there is an issue with the api call
    // async await is a beter
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCountries(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="cardContainer">
            {countries.map(country => (
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
            ))}
        </div>
    );
}

export default CountryCard;