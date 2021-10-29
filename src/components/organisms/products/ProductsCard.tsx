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
}

export const ProcuctsCard: VFC<Props> = memo((props) => {
    const { imageUrl, product, language, content, source } = props;
    return (
        <Box
            p={4}
            w="300px"
            h="400px"
            bg="rgba(255,255,255,0.9)"
            borderRadius="10px"
            shadow="md"
        >
            <Stack textAlign="center" >
                <Text fontSize="lg" fontWeight="bold">{product}</Text>
                <Text fontSize="md" color="gray.800">{language}</Text>
                <Link >
                    <Image alt={product} src={imageUrl}
                        h="120px" borderRadius="10px" bgSize="cover" bgPosition="center" display="block" mx="auto"
                    />
                </Link>
                <Text fontSize="md" color="gray.700">・苦労した点：{content}</Text>
                <Text fontSize="md" color="gray.600">ソースコード⬇</Text>
                <Link fontSize="md" color="gray.800" >{source}</Link>
            </Stack>
        </Box>
    )
})