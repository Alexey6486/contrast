import React from 'react'
import '../styles/globals.css'
import {store} from "../src/redux/store";
import {Provider} from "react-redux";

const MyApp = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;
