import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-photo-view/dist/react-photo-view.css';
import AuthProvider from './Context/AuthContext/AuthProvider';
import ScrollToTop from 'react-scroll-to-top'
import { BsScissors } from 'react-icons/bs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer position='top-right' />
      <App />
      <ScrollToTop title='Scroll To Top' smooth component={<BsScissors className='text-center mx-auto text-white' />} />
    </AuthProvider>
  </React.StrictMode>
);

