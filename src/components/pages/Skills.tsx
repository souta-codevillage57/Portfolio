import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Heading, Wrap } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { skillsData } from "../hooks/skillsData";


export const Skills: VFC = memo(() => {


    return (
        <Box bgImage="https://images.unsplash.com/photo-1633060839316-3f56ac11dbe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80"
            bgSize="cover" bgPosition="center" height="100vh">
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
        </Box>
    )
})