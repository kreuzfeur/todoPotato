//react
import React from 'react';
//router
import { Route, Switch } from 'react-router-dom';
//components
import {HomePage, LoginPage} from '../pages';
import Error404 from '../error-404';
const App = () => {
    return (
        <section className="app container-fluid">
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/login' component={LoginPage} exact />
                <Route component={Error404} />
            </Switch>
        </section>
    )
}
export default App;