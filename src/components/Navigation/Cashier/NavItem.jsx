import { Flex, Icon } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"


export const NavItem = (props) => {
    const location = useLocation()
    const { icon, children, to, size, ...rest } = props
    const isActive = location.pathname === to

    return (
        <Flex w="full">
            <Flex justify="center" cursor="pointer" role="group" w="97%"
            fontWeight={isActive ? "bold" : "normal"} transition=".15s ease"
            color={isActive ? "orange" : "#abbcd5"} {...rest} position="relative"
            >
                {icon && (
                <Icon boxSize={size} as={icon}/>
                )}
            </Flex>
            <Flex bg="orange" w="3%" display={isActive ? "flex" : "none"} borderRadius="10%" />
        </Flex>
    )
}