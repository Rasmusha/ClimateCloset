import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AddClothes from './components/AddClothes.jsx' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-clothes",
    element: <AddClothes />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
