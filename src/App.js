import Router from "./routes";
import GlobalStyle from "./style/global";
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
