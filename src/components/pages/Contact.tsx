import { Box, Divider, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const Contact: VFC = memo(() => {
    return (
        <Flex flexDirection="column" >
            <Heading as="h1" fontSize="xl" color="gray.600" textAlign="center" mt={4}>- Contact -</Heading>
            <Flex align="center" justify="center" mt={6}>
                <Box bg="white" w="lg" p={4} borderRadius="md" shadow="md">
                    <Heading as="h1" fontSize="lg" textAlign="center">お問い合わせはこちらから</Heading>
                    <Divider my={4} />
                    <Stack spacing={6} py={4} px={10}>
                        <Text fontSize="md" fontWeight="bold">・メールアドレス</Text>
                        <Text>souta1846@gmail.com</Text>
                        <Text fontWeight="bold">・GitHubアカウント</Text>
                        <Link href="https://github.com/souta-codevillage57">https://github.com/souta-codevillage57</Link>
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    )
})