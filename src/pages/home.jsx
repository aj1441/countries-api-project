import { HStack, Input } from "@chakra-ui/react"
import { InputGroup } from "./components/ui/input-group"
import { LuSearch } from "react-icons/lu"
import { Input } from "@chakra-ui/react"
import { Fieldset } from "@chakra-ui/react"
import { Card } from "@chakra-ui/react"
import '../App.css';
import { useState } from 'react';

function Home() {


    return (
        <>
            <form className="formContainer">
                <HStack gap="10" width="full">
                    <InputGroup
                        flex="1"
                        startElement={<LuSearch />}
                        endElement={<Kbd>⌘K</Kbd>}
                    >
                        <Input placeholder="Search for a country.." />
                    </InputGroup>
                </HStack>
                <Fieldset.Root>
                    <Fieldset.Legend />
                    <Fieldset.Content />
                </Fieldset.Root>
            </form>
            <main className="cardContainer">
                <Card.Root>
                    <Card.Header />
                    <Card.Body />
                    <Card.Footer />
                </Card.Root>
            </main>
        </>
    );
}

export default Home;
