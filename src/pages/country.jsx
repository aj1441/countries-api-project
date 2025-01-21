import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
// import './Country.css';
// import { CardHorizontal } from '../customComponents/IndividualCountryCard';
import { Box, Card, HStack, Image, Text } from "@chakra-ui/react"

const Country = () => {
  // Get the country ID from the URL parameters
  const { id } = useParams();
  // Hook to navigate programmatically
  const navigate = useNavigate();
  // State to store the country data
  const [country, setCountry] = useState(null);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);
  // State to manage any errors
  const [error, setError] = useState(null);
  // State to manage the border countries
  const [borderCountries, setBorderCountries] = useState([]);

  // Fetch the country data when the component mounts or the ID changes
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        // Fetch the country data from the API
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        const data = await response.json();
        // Set the country data to state
        setCountry(data[0]);
       // Fetch the border countries data
        if (data[0].borders) {
          const borderResponses = await Promise.all(
            data[0].borders.map(border => fetch(`https://restcountries.com/v3.1/alpha/${border}`))
          );
          const borderData = await Promise.all(borderResponses.map(res => res.json()));
          setBorderCountries(borderData.map(b => b[0].name.common));
        } else {
          setBorderCountries([]);
        }
        // Set loading to false
        setLoading(false);
      } catch (error) {
        // Set the error to state
        setError(error);
        // Set loading to false
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  // Show loading message while data is being fetched
  if (loading) return <p>Loading...</p>;
  // Show error message if there was an error fetching the data
  if (error) return <p>Error: {error.message}</p>;

  // Function to handle back button click
  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };




  
  return (
    <>
      <div>
        <Button className="BackButton" onClick={handleBackClick}>Back</Button>
      </div>
       <Card.Root flexDirection="row" overflow="hidden" maxW="80%" placeSelf="center">
              <Image
                  objectFit="cover"
                  maxW="50%"
                  src={country.flags.svg}
                  alt="Image of {country.name.common}"
              />
              <Box display="flex" flexDirection="row" justifyContent="space-between" p="4" flexWrap="wrap">
                  <Card.Body >
                      <Card.Title mb="2">{country.name.common}</Card.Title>
                      <HStack>
                          <ul>
                              <li>Population: {country.population}</li>
                              <li>Region: {country.region}</li>
                              <li>Capital: {country.capital}</li>
                              <li>Search For: XX times</li>
                          </ul>
                      </HStack>
                      <HStack mt="4" flexWrap="wrap">
                          <Text fontWeight="semibold" textStyle="xl">
                              Border Countries:
                          </Text>
                          {borderCountries.length > 0 ? (
            borderCountries.map((borderCountry, index) => (
              <span key={index}>{borderCountry}</span>
            ))
          ) : (
            <span>None</span>
          )}
                      </HStack>
                  </Card.Body>
                  <Card.Footer>
                      <Button>Save</Button>
                  </Card.Footer>
              </Box>
          </Card.Root>
      {/* <CardHorizontal country={country} /> */}
      {/* <div className="MyCountryCardContainer">
        <img src={country.flags.svg} alt={`Image of ${country.name.common}`} />
        <div className="CountryDetails">
          <h2>{country.name.common}</h2>
          <p><span>Population:</span> {country.population}</p>
          <p><span>Region:</span> {country.region}</p>
          <p><span>Capital:</span> {country.capital}</p>
          <p><span>Search For:</span> XX times</p>
        </div>
        <div className="BorderCountries">
          <h4>Border Countries:</h4>
          {borderCountries.length > 0 ? (
            borderCountries.map((borderCountry, index) => (
              <span key={index}>{borderCountry}</span>
            ))
          ) : (
            <span>None</span>
          )}
        </div>
        <div className="SaveButtonContainer">
          <Button className="SaveButton">Save</Button>
        </div>
      </div> */}
    </>
  );
};

export default Country;