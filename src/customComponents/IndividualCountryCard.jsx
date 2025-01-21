
// import { Badge, Box, Card, HStack, Image, Text } from "@chakra-ui/react"
// import { Button } from "../components/ui/button"
// import PropTypes from 'prop/-types';

// export const CardHorizontal = ({ country }) => (
//     <Card.Root flexDirection="row" overflow="hidden" maxW="80%" placeSelf="center">
//         <Image
//             objectFit="cover"
//             maxW="50%"
//             src={country.flags.png}
//             alt="Image of {country.name.common}"
//         />
//         <Box display="flex" flexDirection="row" justifyContent="space-between" p="4" flexWrap="wrap">
//             <Card.Body >
//                 <Card.Title mb="2">{country.name.common}</Card.Title>
//                 <HStack>
//                     <ul>
//                         <li>Population: {country.population}</li>
//                         <li>Region: {country.region}</li>
//                         <li>Capital: {country.capital}</li>
//                         <li>Search For: XX times</li>
//                     </ul>
//                 </HStack>
//                 <HStack mt="4" flexWrap="wrap">
//                     <Text fontWeight="semibold" textStyle="sm">
//                         Border Countries:
//                     </Text>
//                     <Badge>Some Country</Badge>
//                     <Badge>Some Country</Badge>
//                 </HStack>
//             </Card.Body>
//             <Card.Footer>
//                 <Button>Save</Button>
//             </Card.Footer>
//         </Box>
//     </Card.Root>
// )

// CardHorizontal.propTypes = {
//     country: PropTypes.shape({
//         flags: PropTypes.shape({
//             png: PropTypes.string.isRequired,
//         }).isRequired,
//         name: PropTypes.shape({
//             common: PropTypes.string.isRequired,
//         }).isRequired,
//         population: PropTypes.number.isRequired,
//         region: PropTypes.string.isRequired,
//         capital: PropTypes.string.isRequired,
//     }).isRequired,
// };

