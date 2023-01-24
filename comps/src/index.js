import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import {NavProvider} from './context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavProvider >
        <App />
    </NavProvider>
);

