import { useState } from 'react';
import { LuSearch } from "react-icons/lu"
// import { HStack, Input, Kbd, Fieldset } from "@chakra-ui/react"
// import { InputGroup } from "../components/ui/input-group"
// import { Field } from "../components/ui/field"
// import {
//     NativeSelectField,
//     NativeSelectRoot,
// } from "../components/ui/native-select"
// import { LuSearch } from "react-icons/lu"

// const RegionSelect = () => (
//   <NativeSelectRoot size="xs" variant="plain" width="auto" me="-1">
//     <NativeSelectField defaultValue="America" fontSize="sm">
//       <option value="Africa">Africa</option>
//       <option value="America">America</option>
//       <option value="Asia">Asia</option>
//       <option value="Europe">Europe</option>
//       <option value="Oceania">Oceania</option>
//     </NativeSelectField>
//   </NativeSelectRoot>
// )

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
        // <HStack className="countrySearch" gap="10" width="full">
        //     <InputGroup
        //         flex="1"
        //         startElement={<LuSearch />}
        //         endElement={<Kbd>⌘K</Kbd>}
        //     >
        //         <Input placeholder="Search contacts" />
        //     </InputGroup>
        //     <Fieldset.Root size="lg" maxW="md">
        //         <Fieldset.Content>
        //             <Field label="Country">
        //                 <NativeSelectRoot size="xs" variant="plain" width="auto" me="-1">
        //                     <NativeSelectField name="country" defaultValue="America" fontSize="sm">
        //                         <option value="Africa">Africa</option>
        //                         <option value="America">America</option>
        //                         <option value="Asia">Asia</option>
        //                         <option value="Europe">Europe</option>
        //                         <option value="Oceania">Oceania</option>
        //                     </NativeSelectField>
        //                 </NativeSelectRoot>
        //             </Field>
        //         </Fieldset.Content>
        //     </Fieldset.Root>
        // </HStack>
    )
}



export default CountrySearch;

