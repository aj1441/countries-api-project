
import { Badge, Box, Card, HStack, Image, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import PropTypes from 'prop-types';

export const CardHorizontal = ({ country }) => (
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
)

CardHorizontal.propTypes = {
    country: PropTypes.shape({
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.shape({
            common: PropTypes.string.isRequired,
        }).isRequired,
        population: PropTypes.number.isRequired,
        region: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
    }).isRequired,
};

