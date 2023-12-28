import {StrictMode, Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client';
import Root from '@/routers/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./css/index.css";

import HomeIndex from '@/routers/home/index';
import {loader as searchBooksLoader} from '@/routers/home/search-result'

const SearchResult = lazy(() => import('@/routers/home/search-result'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <HomeIndex />,
        children: [
          {
            index: true,
            element: <SearchResult />,
            loader: searchBooksLoader
          }
        ],
      }
    ]
  }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
