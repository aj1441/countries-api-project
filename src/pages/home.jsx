
import CountrySearch from '../customComponents/CountrySearchBar';
// import { useEffect, useState } from 'react';
// import { Card, Image } from "@chakra-ui/react";
import '../App.css';
import CountryCard from '../customComponents/CountryCard';
// import { useState } from 'react';

function Home() {
    // const [countries, setCountries] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // // want to split this out between a function for the api call and the useEffect.. Want two seperate in case there is an issue with the api call
    // // async await is a beter
    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setCountries(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;


    return (
        <>
            <CountrySearch />
            <main>
          <CountryCard />
            </main>
        </>
    );
}

export default Home;
