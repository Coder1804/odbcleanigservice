import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import {About, Blogs, Contact, Delivery, Home, Price} from "./pages/index.js";
import {action as orderAction} from "./components/common/Order.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                action:orderAction,
                errorElement:<h1>Nimadir XAto!</h1>
            },
            {
                path: 'price',
                element: <Price/>
            },
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: 'delivery',
                element: <Delivery/>
            },
            {
                path: 'aboutus',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }


        ]
    },
    {
        path: '*',
        element: <h1>This Route doeasnt exist</h1>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
