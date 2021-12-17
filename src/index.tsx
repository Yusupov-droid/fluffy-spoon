import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createTheme, ThemeProvider} from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: '#c33e37'
        },
        secondary: {
            main: '#a5a4ff'
        },
        type: 'dark'
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);