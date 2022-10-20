import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import React from 'react';

import {setupStore} from "./redux";
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

