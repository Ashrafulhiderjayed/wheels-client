import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <div style={{overflowX: 'hidden'}}>
      <React.StrictMode>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </React.StrictMode>,
    </div>
)
