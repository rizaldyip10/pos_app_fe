import { Flex, Image, Text } from "@chakra-ui/react"


export const MenuList = () => {
    const data = [
        {
            id: 1,
            name: "Spaghetti Bolognese",
            imgURL: "https://cdn1-production-images-kly.akamaized.net/I9_ifiSoEse6G8DkxvA1JoNfOzA=/0x194:5616x3359/640x360/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3048436/original/030475400_1581499756-shutterstock_413580649.jpg",
            price: 45000,
            description: "Spaghetti dengan saus italia ditaburi dengan keju."
        },
        {
            id: 2,
            name: "Philly Cheesesteak",
            imgURL: "https://images.immediate.co.uk/production/volatile/sites/2/2022/09/Philly-cheesesteak-fbc53c6.jpg?resize=768,574",
            price: 65000,
            description: "Sandwich isi steak dengan topping keju dan sayur."
        },
        {
            id: 3,
            name: "Beef Burger",
            imgURL: "https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg",
            price: 40000,
            description: "Burger dengan daging sapi."
        },
        {
            id: 4,
            name: "Hot Caffee Latte",
            imgURL: "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2021/Cafe%20Latte.jpg.jpeg?itok=fod4AqvL",
            price: 27000,
            description: "Campuran kopi dan susu panas."
        },
        {
            id: 5,
            name: "Hot Chocolate",
            imgURL: "https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg",
            price: 25000,
            description: "Coklat panas ala italia dengan topping whipcream."
        },
        {
            id: 6,
            name: "Ice Lychee Tea",
            imgURL: "https://flash-coffee.com/id/wp-content/uploads/sites/13/2023/06/LYCHEE-ICE-TEA-600x375.png",
            price: 22000,
            description: "Es teh dengan leci sebgai penambah rasa."
        }
    ]
    return (
        <Flex wrap="wrap" w="full" justify="space-between">
            {data?.map((item) => (
                <Flex
                    key={item.id}
                    bg="white"
                    h="20rem"
                    w="14rem"
                    mt="1.5rem"
                    rounded="lg"
                    p=".75rem"
                    direction="column"
                    gap={3}
                    justify="flex-start"
                >
                    <Flex h="10rem">
                        <Image src={item.imgURL} objectFit="cover" />
                    </Flex>
                    <Flex justify="flex-start">
                        <Text fontWeight="bold" align="start" fontSize="1.1rem">{item.name}</Text>
                    </Flex>
                    <Flex w="full">
                        <Text fontSize=".8rem" color="gray" align="start">{item.description}</Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text fontSize="1.1rem" fontWeight="bold" color="orange">
                            Rp {item.price}
                        </Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}