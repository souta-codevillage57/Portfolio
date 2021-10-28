import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Heading, Wrap } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { skillsData } from "../hooks/skillsData";


export const Skills: VFC = memo(() => {


    return (
        <Flex align="center" justify="center" flexDirection="column">
            <Heading as="h1" color="white" fontSize="xl" textAlign="center" mt={4}>- Skills -</Heading>
            <Wrap justify="space-around" p={{ base: 4, md: 10 }}>
                {skillsData.map((data, index) => (
                    <Box key={index} textAlign="center" p={{ base: 4, md: 8 }}>
                        <Image src={data.imageUrl} />
                        <Text fontSize="20px" color="white">{data.language}</Text>
                    </Box>
                ))}
            </Wrap>
        </Flex >
    )
})