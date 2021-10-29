import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Heading, Wrap } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { skillsData } from "../hooks/skillsData";


export const Skills: VFC = memo(() => {


    return (
        <Flex align="center" justify="center" flexDirection="column">
            <Heading as="h1" color="white" fontSize="xl" textAlign="center" mt={4}>- Skills -</Heading>
            <Wrap justify="space-around" p={{ base: 4, md: 10 }} >
                {skillsData.map((data, index) => (
                    <Box key={index}
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                        p={10}
                        bg="rgba(255,255,255,0.9)"
                        w="200px"
                        h="200px"
                        borderRadius="50%"
                    >
                        <Image src={data.imageUrl} />
                        <Text fontSize="20px" color="black" fontWeight="bold">{data.language}</Text>
                    </Box>
                ))}
            </Wrap>
        </Flex >
    )
})