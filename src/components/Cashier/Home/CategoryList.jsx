import { Flex, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const CategoryList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search);
    const categoryId = url.get("categoryId") || ""
    const data = [
        {
            id: 1,
            name: "Favorite"
        },
        {
            id: 2,
            name: "Appetizer"
        },
        {
            id: 3,
            name: "Bakery"
        },
        {
            id: 4,
            name: "Beverage"
        },
        {
            id: 5,
            name: "Dessert"
        },
    ];

    const onClick = (id) => {
        url.set("categoryId", id.toString());
        navigate(`?${url.toString()}`);
    };
    const doubleClick = () => {
        url.delete("categoryId")
        navigate(`?${url.toString()}`);
    }

    return (
        <Flex w="full" gap={5} mt="3rem">
            {data.map((item) => (
                <Flex
                    key={item.id}
                    w="fit-content"
                    bg={+categoryId === item.id ? "orange" : "white"}
                    color={+categoryId === item.id ? "white" : "black"}
                    cursor="pointer"
                    p=".5rem .75rem"
                    align="center"
                    justify="center"
                    rounded="lg"
                    shadow="sm"
                    onClick={+categoryId === item.id ? doubleClick : () => onClick(item.id)}
                >
                    <Text fontWeight="bold">{item.name}</Text>
                </Flex>
            ))}
        </Flex>
    );
};
