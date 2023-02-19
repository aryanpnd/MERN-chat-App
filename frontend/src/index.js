import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './Context/ChatProvider';
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#9578f1",
      // ...
      900: "#1a202c",
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider theme={theme}>
    <ChatProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChatProvider>
  </ChakraProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
