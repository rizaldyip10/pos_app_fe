import { Flex } from "@chakra-ui/react"
import { CashierMenu } from "../../components/Cashier/Home/CashierMenu"
import { CashierCart } from "../../components/Cashier/Home/CashierCart"


export const Home = () => {
    return (
        <Flex minH="100vh" bg="#edf3f8" pl="6rem" py="2rem" pr="2rem">
           <CashierMenu /> 
           <CashierCart />
        </Flex>
    )
}