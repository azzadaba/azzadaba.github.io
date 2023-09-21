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
import Resources from './routes/resources.jsx';
import Contact from './routes/contact.jsx';
import Interventions from './routes/interventions.jsx';
import Services from './routes/services.jsx';
import CooccurringConditions from './routes/cooccurringconditions.jsx';
import Phonological from './routes/phonological.jsx';
import Morphological from './routes/morphological.jsx';
import Etymology from './routes/etymology.jsx';
import AssistiveTech from './routes/assistivetech.jsx';

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
      },
      {
        path: "/Resources",
        element: <Resources />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Services",
        element: <Services />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Interventions",
        element: <Interventions />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Cooccurringconditions",
        element: <CooccurringConditions />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Phonological",
        element: <Phonological />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Morphological",
        element: <Morphological />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Etymology",
        element: <Etymology />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Assistivetech",
        element: <AssistiveTech />,
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
