import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Page404 } from "../components/pages/Page404";
import { pageRoutes } from "./PageRoutes";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route path="/" render={({ match: { url } }) => (
                <Switch>
                    {pageRoutes.map((route) => (
                        <Route exact={route.exact} path={`${url}${route.path}`}>
                            {route.children}
                        </Route>
                    ))}
                </Switch>
            )} />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})