import { useState } from 'react';
import { LuSearch } from "react-icons/lu"


const CountrySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    


    const options = [
        { value: 'Africa', label: 'Africa' },
        { value: 'Americas', label: 'America' },
        { value: 'Antartica', label: 'Antartica' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className="countrySearch">
                <div className='searchContainer'>
                    <LuSearch />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <select value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
   
    )
}



export default CountrySearch;

