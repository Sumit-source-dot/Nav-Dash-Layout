import DashboardLayout from '../layout/DashboardLayout';
import DashHome from '../pages/DashHome';
import DashStat from '../pages/DashStat';


const DashRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: '',
      element: <DashHome />
    },
    {
      path: 'stats', 
      element: <DashStat />
    }
  ]
};

export default DashRoutes;
