import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <React.Fragment>
      
      <ToastContainer />
      <Main/>
    </React.Fragment>
      
  );
}

export default App;
