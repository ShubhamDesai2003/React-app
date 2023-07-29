import React from 'react';

import './index.css';

import App from './app';




// import  ReactDOM  from "react-dom";
// App:Components file
// root:Main Div in Index.html
// ReactDOM.render(<App /> , document.getElementById('root'));


import { createRoot } from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);