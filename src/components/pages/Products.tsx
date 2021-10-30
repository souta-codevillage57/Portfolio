import { Flex, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { ProcuctsCard } from "../organisms/products/ProductsCard";
import { ProductsData } from "../hooks/productsData";

export const Products: VFC = memo(() => {
    return (
        <Flex flexDirection="column">
            <Heading as="h1" color="white" fontSize="xl" textAlign="center" mt={4}>- Products -</Heading>
            <Wrap justify="space-around" p={{ base: 4, md: 10 }}>
                {ProductsData.map((data, index) => (
                    <WrapItem key={index} mx="auto">
                        <ProcuctsCard imageUrl={data.imageUrl} product={data.product} language={data.language} content={data.content} source={data.source} link={data.link} />
                    </WrapItem>
                ))}
            </Wrap >
        </Flex>
    )
})