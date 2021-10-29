import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { memo, VFC } from "react";


type Props = {
    imageUrl: string
    product: string
    language: string
    content: string
}

export const ProcuctsCard: VFC<Props> = memo((props) => {
    const { imageUrl, product, language, content } = props;
    return (
        <Box
            p={4}
            w="260px"
            h="300px"
            bg="rgba(255,255,255,0.9)"
            borderRadius="10px"
            shadow="md"
        >
            <Stack textAlign="center" >
                <Text fontSize="lg" fontWeight="bold">{product}</Text>
                <Text fontSize="md" color="gray.800">{language}</Text>
                <Link >
                    <Image alt={product} src={imageUrl}
                        h="120px" borderRadius="10px" bgSize="cover" bgPosition="center"
                    />
                </Link>
                <Text fontSize="md" color="gray.700">{content}</Text>
            </Stack>
        </Box>
    )
})