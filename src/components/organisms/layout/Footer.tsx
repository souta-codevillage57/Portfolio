import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";


export const Footer: VFC = memo(() => {

    return (
        <>
            <Flex as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} >
                </Flex>
                <Flex display="flex" align="center" justify="center" fontSize="sm" flexGrow={2} >
                    <Box pr={4}>
                        <Text>&copy; 2021 Portfolio</Text>
                    </Box>
                </Flex>
            </Flex>
        </>

    )
})