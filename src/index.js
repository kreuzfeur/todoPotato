//react
import React from 'react';
import ReactDOM from 'react-dom';
//router
import { BrowserRouter as Router } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BibapiProvider } from './components/bibapi-service-context';
//services
import {Bibapi} from './services';
//styles

const bibapi = new Bibapi();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BibapiProvider value={bibapi}>
                <Router>
                    <App />
                </Router>
            </BibapiProvider>
        </ErrorBoundry>
    </Provider>
    ,
    document.getElementById('root')
);