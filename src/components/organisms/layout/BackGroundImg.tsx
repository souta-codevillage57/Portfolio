import { Box } from "@chakra-ui/layout";
import { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
}

export const BackGroundImg: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <Box bgImage="https://images.unsplash.com/photo-1635169626967-68120c91e938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            bgSize="cover"
            bgPosition="center"
        >
            {children}
        </Box>
    )
})