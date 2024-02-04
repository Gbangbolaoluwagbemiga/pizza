// import {motion} from 'framer-motion';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
