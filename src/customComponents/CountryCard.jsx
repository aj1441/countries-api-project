import { useEffect, useState } from 'react';
import { Card, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { fetchCountries } from '../helperFunctions/FetchCountriesApi';

function CountryCard() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = (country) => {
    navigate(`/country/${country.cca3}`);
  };

  return (
        <div className="cardContainer">
                 {countries.map(country => (
                     <Card.Root className='cardRoot' onClick={() => handleClick(country)} cursor="pointer" key={country.cca3}>
                         <Image
                             src={country.flags.png}
                             alt={country.flags.alt}
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






// import { Card, Image } from "@chakra-ui/react";
// import { useNavigate } from 'react-router-dom';



// function CountryCard ({ country }) {
//     const [countries, setCountries] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

    

//     // want to split this out between a function for the api call and the useEffect.. Want two seperate in case there is an issue with the api call
//     // async await is a beter
//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 setCountries(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     const handleClick = () => {
//         navigate(`/country/${country.cca3}`);
//       };

//     return (
//         <div className="cardContainer">
//             {countries.map(country => (
//                 <Card.Root className='cardRoot' onClick={handleClick} cursor="pointer" key={country.cca3}>
//                     <Image
//                         src={country.flags.png}
//                         alt="Image of {country.name.common}"
//                     />
//                     <Card.Header className='cardHeader'>{country.name.common}</Card.Header>
//                     <Card.Body className='cardBody'>
//                         <ul>
//                             <li>Population: {country.population}</li>
//                             <li>Region: {country.region}</li>
//                             <li>Capital: {country.capital}</li>
//                         </ul>

//                     </Card.Body>
//                 </Card.Root>
//             ))}
//         </div>
//     );
// }

// export default CountryCard;