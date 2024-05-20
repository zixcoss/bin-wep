import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//react-router เปลียนหน้า
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Wifi from './Component/Wifi.jsx'
import Dashboard from './Component/Dashboard.jsx';
import Control from './Component/Control.jsx';
import Setting from './Component/Setting.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Wifi/>
  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  },
  {
    path:"/Control",
    element: <Control/>
  },
  {
    path:"/Setting",
    element: <Setting/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
