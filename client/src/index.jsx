import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/Bio';
import Music from './pages/Music';
import Merch from './pages/Merch';
import Tour from './pages/Tour';
import Members from './pages/Members';
import MembersHome from './pages/MembersHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Music',
        element: <Music />,
      },
      {
        path: '/Merch',
        element: <Merch />,
      },
      {
        path: '/Tour',
        element: <Tour />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Members',
        element: <Members />
      },
      {
        path: '/membersHome',
        element: <MembersHome />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);