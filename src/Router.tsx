import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateCompanyPage from './pages/CreateCompany.page';
import EditCompanyPage from './pages/EditCompany.page';
import { HomePage } from './pages/Home.page';
import LoginPage from './pages/Login.page';
import ViewCompanyPage from './pages/ViewCompany.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/company',
    element: <HomePage />,
  },
  {
    path: '/company/create',
    element: <CreateCompanyPage />,
  },
  {
    path: '/company/edit/:id',
    element: <EditCompanyPage />,
  },
  {
    path: '/company/view/:id',
    element: <ViewCompanyPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
