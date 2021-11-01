import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { memo, VFC } from "react";


type Props = {
    imageUrl: string;
    product: string;
    language: string;
    content: string;
    source: string;
    productUrl: string;
}

export const ProcuctsCard: VFC<Props> = memo((props) => {
    const { imageUrl, product, language, content, source, productUrl } = props;
    return (
        <Box
            p={4}
            w="300px"
            h="360px"
            bg="rgba(255,255,255,0.9)"
            borderRadius="10px"
            shadow="md"
        >
            <Stack textAlign="center" >
                <Text fontSize="lg" fontWeight="bold">{product}</Text>
                <Text fontSize="md" color="gray.800">{language}</Text>
                <Link as="a" href={productUrl} _focus={{ outline: "none" }}>
                    <Image alt={product} src={imageUrl}
                        h="120px" borderRadius="10px" bgSize="cover" bgPosition="center" display="block" mx="auto"
                    />
                </Link>
                <Text fontSize="md" color="gray.700">{content}</Text>
                <Link as="a" href={source} fontSize="md" color="gray.900" >（ソースコードはこちらから）</Link>
            </Stack>
        </Box>
    )
})