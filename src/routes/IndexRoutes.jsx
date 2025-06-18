import HomeLayout from '../layout/index';
import Home from '../pages/Home';      // ✅ new import
import About from '../pages/About';
import Contact from '../pages/Contact';

const IndexRoutes = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '',          // ✅ root route = home
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
};

export default IndexRoutes;
