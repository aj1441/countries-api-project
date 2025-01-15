// import { HStack, Input } from "@chakra-ui/react"
// import { InputGroup } from "../components/ui/input-group"
// import { LuSearch } from "react-icons/lu"
// import { Fieldset } from "@chakra-ui/react"
import CountrySearch from '../customComponents/CountrySearchBar';
import { useEffect, useState } from 'react';
import { Card, Image } from "@chakra-ui/react"
import '../App.css';
// import { useState } from 'react';

function Home() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
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
        <>
            <CountrySearch />
            <main className="cardContainer">
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
            </main>
        </>
    );
}

export default Home;
