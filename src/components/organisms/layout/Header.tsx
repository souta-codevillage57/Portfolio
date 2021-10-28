import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router";
import { MenuIconButton } from "../../atoms/button/MenuIconButon";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const history = useHistory();

    const onClickHome = useCallback(() => history.push("/"), [history])
    const onClickSkills = useCallback(() => history.push("/skills"), [history])
    const onClickProducts = useCallback(() => history.push("/products"), [history])
    const onClickContact = useCallback(() => history.push("/contact"), [history])

    return (
        <>
            <Flex as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }} >Portfolio</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link onClick={onClickSkills}>skills</Link>
                    </Box>
                    <Box pr={4}>
                        <Link onClick={onClickProducts}>products</Link>
                    </Box>
                    <Link onClick={onClickContact}>contact</Link>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
            </Flex>
            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                onClickHome={onClickHome}
                onClickSkills={onClickSkills}
                onClickProducts={onClickProducts}
                onClickContact={onClickContact}
            />
        </>
    )
})