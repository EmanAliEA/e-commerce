import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product/:id', element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
