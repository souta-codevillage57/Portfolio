import { Box, Flex, Heading } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
    return (
        <Box bgImage="https://images.unsplash.com/photo-1635301385388-f487ab6e9431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1750&q=80" bgSize="cover" bgPosition="center">
            <Flex as="div" align="center" justify="center" height="100vh" >
                <Heading as="h1" size="lg" color="white">Welcom to my portfolio</Heading>
            </Flex>
        </Box>
    )
})