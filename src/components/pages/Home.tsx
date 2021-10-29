import { Flex, Heading } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
    return (

        <Flex as="div" align="center" justify="center" height="100vh" >
            <Heading as="h1" size="lg" color="white">Welcom to my portfolio</Heading>
        </Flex>

    )
})