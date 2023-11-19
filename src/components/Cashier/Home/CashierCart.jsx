import { Button, Flex, Heading } from "@chakra-ui/react"
import { GoGear } from "react-icons/go";


export const CashierCart = () => {
    return (
        <Flex 
            direction="column" 
            w="27%" 
            bg="white" 
            h="100vh" 
            position="fixed"
            mt="-2rem"
            align="flex-start"
            py="2rem"
            right="0"
        >
            <Flex px="1.5rem" mt="1rem" color="black" align="center" justify="space-between" w="full">
                <Heading fontSize="1.5rem">Current Order</Heading>
                <Button color="black"><GoGear /></Button>
            </Flex>
        </Flex>
    )
}