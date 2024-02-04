// import {motion} from 'framer-motion';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
  // return <motion.div></motion.div>;
}

export default App;
