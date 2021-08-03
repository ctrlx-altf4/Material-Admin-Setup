import { lazy } from "react";

const SubMenu11 = lazy(() => import("pages/Menu1/SubMenu11"));
const SubMenu12 = lazy(() => import("pages/Menu1/SubMenu12"));

const SubMenu21 = lazy(() => import("pages/Menu2/SubMenu21"));

const Menu3 = lazy(() => import("pages/Menu3"));

const Menu1Routes = [
  {
    path: "/menu1/submenu11",
    name: "Sub Menu 11",
    component: SubMenu11,
  },
  {
    path: "/menu1/submenu12",
    name: "Sub Menu 12",
    component: SubMenu12,
  },
];

const Menu2Routes = [
  {
    path: "/menu2/Submenu21",
    name: "Sub Menu 21",
    component: SubMenu21,
  },
];
export const routes = [
  {
    path: "/menu1",
    name: "Menu1",
    dropdownMenu: Menu1Routes,
  },
  {
    path: "/menu2",
    name: "Menu2",
    dropdownMenu: Menu2Routes,
  },
  {
    path: "/menu3",
    name: "Menu3",
    component: Menu3,
  },
];

export default routes;
export { Menu1Routes, Menu2Routes };
