import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Image, Badge, Box, HStack, Text} from '@chakra-ui/react';
// import { Badge, Box, Card, HStack, Image, Text } from "@chakra-ui/react"
import { Button } from "../components/ui/button"
// import { CardHorizontal } from './customComponents/IndividualCountryCard';  
import './Country.css'

const Country = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
    <div>
      <Button className ="BackButton" onClick={handleBackClick}>Back</Button>
    </div>
    <div className="MyCountryCardContainer">
            <img src={country.flags.png} alt={`Image of ${country.name.common}`} />
            <div className="CountryDetails">
                <h2>{country.name.common}</h2>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
                <p><span>Search For:</span> XX times</p>
            </div>
            <div className="BorderCountries">
                <h4>Border Countries:</h4>
                <span>Some Country</span>
                <span>Some Country</span>
            </div>
            <div className ="SaveButton">
            <Button >Save</Button>
            </div>
        </div>
     </>
  );
};

export default Country;

// import { useParams } from 'react-router-dom';

// const Country = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Country Details for {id}</h1>
//       {/* Fetch and display country details based on the id */}
//     </div>
//   );
// };

// export default Country;