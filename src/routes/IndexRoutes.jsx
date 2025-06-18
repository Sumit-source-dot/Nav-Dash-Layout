import HomeLayout from '../layout/MainLayout';
import Home from '../pages/Home';     
import About from '../pages/About';
import Contact from '../pages/Contact';

const IndexRoutes = {
  path: '/',
  element: <HomeLayout />,
  children: [
    {
      path: '',        
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
