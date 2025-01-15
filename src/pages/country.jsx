import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, Badge, Box, HStack, Text } from '@chakra-ui/react';
// import { Badge, Box, Card, HStack, Image, Text } from "@chakra-ui/react"
import { Button } from "../components/ui/button"
// import { CardHorizontal } from './customComponents/IndividualCountryCard';  

const Country = () => {
  const { id } = useParams();
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

  return (
    <div>
      <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
        <Image
          objectFit="cover"
          maxW="200px"
          src={country.flags.png}
          alt="Image of {country.name.common}"
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">{country.name.common}</Card.Title>
            <Card.Description>
              <ul>
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
                <li>Search For: XX times</li>
              </ul>
            </Card.Description>
            <HStack mt="4">
              <Text fontWeight="semibold" textStyle="sm">
                Border Countries:
              </Text>
              <Badge>Some Country</Badge>
              <Badge>Some Country</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button>Save</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </div>
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