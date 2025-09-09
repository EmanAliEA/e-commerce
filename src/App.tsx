import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductsList from './components/ProductsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductsList /> },
      { path: 'cart', element: <Cart /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
