import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";


type Props = {
    imageUrl: string
    product: string
    content: string
}

export const ProcuctsCard: VFC<Props> = memo((props) => {
    const { imageUrl, product, content } = props;
    return (
        <Box
            p={4}
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
        // _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
            <Stack textAlign="center" >
                <Image src={imageUrl} />
                <Text fontSize="lg" fontWeight="bold">{product}</Text>
                <Text fontSize="md" color="gray.500">{content}</Text>
            </Stack>
        </Box>
    )
})