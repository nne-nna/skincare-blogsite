import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import QuizPage from './pages/QuizPage.jsx';
import { SearchProvider } from './components/SearchContext';
import { blogLoader } from './blogLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: blogLoader
      },
      { path: "/quiz", element: <QuizPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>
);

