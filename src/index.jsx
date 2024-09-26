import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/Posts';
import RootLayout from './routes/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './routes/NewPost';
const router = createBrowserRouter([
    { 
      path:'/',
      element :<RootLayout />,
      children:[
        { path : '', element: <App/>},
        { path:'/create-post',element:<NewPost/>},
      ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 
