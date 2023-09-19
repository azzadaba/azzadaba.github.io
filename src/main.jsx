import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import ErrorPage from './error-page.jsx';
import Navpage from './routes/nav-page.jsx';
import Orthography from './routes/orthography.jsx';
import Dyslexia from './routes/dyslexia.jsx';
import About from './routes/about.jsx';
import LiteracyWellness from './routes/literacywellness.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LiteracyWellness />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Orthography",
        element: <Orthography />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Dyslexia",
        element: <Dyslexia />,
        errorElement: <ErrorPage />
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
