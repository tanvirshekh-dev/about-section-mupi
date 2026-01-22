import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DepartmentDetails from "../pages/DepartmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    },
    {
    path: "/department/:id",
    element: <DepartmentDetails />,
    },
    
]);

export default router;
