import { memo, ReactNode, VFC } from "react";
import { BackGroundImg } from "../organisms/layout/BackGroundImg";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

type Props = {
    children: ReactNode;
}

export const DefaultLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <BackGroundImg>
                {children}
            </BackGroundImg>
            <Footer />
        </>
    )
})