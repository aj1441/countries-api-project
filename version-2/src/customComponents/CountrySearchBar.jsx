import { LuSearch } from 'react-icons/lu';
import PropTypes from 'prop-types';

const CountrySearchBar = ({ countries, searchTerm, setSearchTerm, selectedOption, setSelectedOption }) => {
  const regions = [...new Set(countries.map(country => country.region))].filter(Boolean);



  // Handle changes to the search input field
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle changes to the region dropdown
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="countrySearch">
      <div className='searchContainer' id = 'searchContainer'>
        <LuSearch />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select A Region</option>
        <option value="">All</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

// Define prop types for the CountrySearchBar component
CountrySearchBar.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    region: PropTypes.string.isRequired,
  })).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};
// Export the CountrySearchBar component as the default export
export default CountrySearchBar;