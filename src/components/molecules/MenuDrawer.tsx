import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { memo, VFC } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickSkills: () => void;
    onClickProducts: () => void;
    onClickContact: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {

    const { onClose, isOpen, onClickHome, onClickSkills, onClickProducts, onClickContact } = props;
    return (
        <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100" >
                        <Button w="100%" onClick={onClickHome}>TOP</Button>
                        <Button w="100%" onClick={onClickSkills}>Skills</Button>
                        <Button w="100%" onClick={onClickProducts}>Products</Button>
                        <Button w="100%" onClick={onClickContact}>Contact</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})