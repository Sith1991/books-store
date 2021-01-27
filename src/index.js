import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import BookstoreService from "./services/bookstore-service";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {BookstoreServiceProvide} from "./components/bookstore-service-context";
import App from "./components/app";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvide value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvide>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)