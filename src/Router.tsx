import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from './Routes/MainPage';

function Router() {
    return <BrowserRouter>
        <Switch>
            <Route path="/">
                <MainPage />
            </Route>
        </Switch>
    </BrowserRouter>
}
export default Router;