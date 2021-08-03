import { lazy } from "react";
import navbarRoutes, { Menu1Routes, Menu2Routes } from "./navbarRoutes";

const Dashboard = lazy(() => import("pages/Dashboard"));

export const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  ...navbarRoutes,
  ...Menu1Routes,
  ...Menu2Routes,
];

export default routes;
export { navbarRoutes };
