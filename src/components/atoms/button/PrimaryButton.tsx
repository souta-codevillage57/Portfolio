import { Button } from "@chakra-ui/button";
import { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <Button
            color="white"
            bg="teal.500"
            borderRadius="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
            {children}
        </Button>
    )
})