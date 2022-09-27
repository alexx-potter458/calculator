import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;