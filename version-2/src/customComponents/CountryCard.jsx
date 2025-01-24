import PropTypes from 'prop-types';
import { Card, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function CountryCard({ countries }) {

    const navigate = useNavigate();


    const handleClick = (country) => {
        navigate(`/country/${country.cca3}`);
    };

    return (
        <div className="cardContainer">
            {countries.map((country) => (
                <Card.Root className="cardRoot" onClick={() => handleClick(country)} cursor="pointer" key={country.cca3}>
                    <Image src={country.flags.png} alt={country.flags.alt} />
                    <Card.Header className="cardHeader">{country.name.common}</Card.Header>
                    <Card.Body className="cardBody">
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
CountryCard.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.shape({
                common: PropTypes.string.isRequired,
            }).isRequired,
            cca3: PropTypes.string.isRequired,
            flags: PropTypes.shape({
                png: PropTypes.string.isRequired,
                alt: PropTypes.string,
            }).isRequired,
            population: PropTypes.number.isRequired,
            region: PropTypes.string.isRequired,
            capital: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
    searchTerm: PropTypes.string,
    selectedOption: PropTypes.string,
};

export default CountryCard;
