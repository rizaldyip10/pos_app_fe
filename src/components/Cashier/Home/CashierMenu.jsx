import { Button, Flex, Heading, Input, InputGroup, InputLeftElement, Menu, MenuButton, Text } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai"
import { BiFilterAlt } from "react-icons/bi"
import { CategoryList } from "./CategoryList"
import { MenuList } from "./MenuList"


export const CashierMenu = () => {
    return (
        <Flex direction="column" ml="2rem" mt="1rem" w="67%" align="center">
            <Flex w="full" justify="space-between" align="center" color="black">
                <Flex direction="column" w="50%" align="flex-start">
                    <Heading fontSize="1.5rem">Welcome, Rizaldy</Heading>
                    <Text fontSize="1.25rem" mt="5px" color="gray">Discover your need easily</Text>
                </Flex>
                <Flex w="50%" justify="space-between">
                    <InputGroup w="80%">
                        <InputLeftElement>
                            <AiOutlineSearch />
                        </InputLeftElement>
                        <Input placeholder="Search product..." bg="white" />
                    </InputGroup>
                    <Menu>
                        <MenuButton as={Button} bg="white" >
                            <BiFilterAlt />
                        </MenuButton>
                    </Menu>
                </Flex>
            </Flex>
            <CategoryList />
            <MenuList />
        </Flex>
    )
}