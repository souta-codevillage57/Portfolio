import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Page404 } from "../components/pages/Page404";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { pageRoutes } from "./PageRoutes";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route path="/" render={({ match: { url } }) => (
                <Switch>
                    {pageRoutes.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                            <DefaultLayout>
                                {route.children}
                            </DefaultLayout>
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