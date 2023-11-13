import { Flex, Heading } from "@chakra-ui/react"
import { AiFillAppstore } from "react-icons/ai"
import { HiClipboardList, HiReceiptTax } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
import { BsFillGearFill } from "react-icons/bs"
import { NavItem } from "./NavItem"
import { NavLink } from "react-router-dom"


export const SidebarCashier = () => {
    return (
        <Flex direction="column" h="100vh" w="6rem" borderRight="1px" borderRightColor="#abbcd5"
        position="fixed" py="2rem" justify="space-between" bg="white"
        >
            <Flex direction="column" gap={8}>
                <Heading fontSize="1.5rem" mb={5} color="orange">Logo</Heading>
                <NavLink to="">
                    <NavItem icon={AiFillAppstore} size={8} to="/" />
                </NavLink>
                <NavLink to="transaction">
                    <NavItem icon={HiClipboardList} size={8} to="/transaction" />
                </NavLink>
                <NavLink to="discount">
                    <NavItem icon={HiReceiptTax} size={8} to="/discount" />
                </NavLink>
            </Flex>
            <Flex direction="column" gap={8}>
                <NavLink to="setting">
                     <NavItem icon={BsFillGearFill} size={8} to="/setting"/>
                </NavLink>
                <NavLink to="setting">
                     <NavItem icon={FiLogOut} size={8} to="/setting"/>
                </NavLink>
            </Flex>
        </Flex>
    )
}