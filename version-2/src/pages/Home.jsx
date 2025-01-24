import { useState } from 'react';
import CountrySearch from '../customComponents/CountrySearchBar';
import '../App.css';
import CountryCard from '../customComponents/CountryCard';
import PropTypes from 'prop-types';

function Home({ countries }) {
    // State to store the search term
    const [searchTerm, setSearchTerm] = useState('');
    // State to store the selected region option
    const [selectedOption, setSelectedOption] = useState('');
  
    const filteredCountries = countries.filter((country) => {
        const matchesSearchTerm = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = selectedOption ? country.region === selectedOption : true;
        return matchesSearchTerm && matchesRegion;
      });

    return (
        <>
            {/* <Header /> */}
            {/* Render the CountrySearch component and pass the necessary props */}
            <CountrySearch
                countries={countries}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            <main>
                {/* Render the CountryCard component and pass the search term and selected option as props */}
                <CountryCard countries={filteredCountries} />
            </main>
        </>
    );
}
Home.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        cca3: PropTypes.string.isRequired,
        name: PropTypes.shape({
            common: PropTypes.string.isRequired,
        }).isRequired,
        population: PropTypes.number.isRequired,
        region: PropTypes.string.isRequired,
        capital: PropTypes.arrayOf(PropTypes.string),
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired,
        }).isRequired,
    })).isRequired,
};

// Export the Home component as the default export
export default Home;