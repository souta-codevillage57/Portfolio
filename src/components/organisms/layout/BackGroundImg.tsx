import { Box } from "@chakra-ui/layout";
import { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
}

export const BackGroundImg: VFC<Props> = memo((props) => {
    const { children } = props;

    return (

        <Box
            bgImage="https://images.unsplash.com/photo-1633060839316-3f56ac11dbe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2368&q=80"
            bgSize="cover"
            bgPosition="center"
            minHeight="100vh"
        >
            {children}
        </Box>

    )
})