import { FaHome, FaInfo, FaList, FaPhone, FaRProject, FaSignOutAlt } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <FaInfo />,
    cName: "nav-text"
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <FaList />,
    cName: "nav-text"
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaRProject />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaPhone />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <FaSignOutAlt />,
    cName: "nav-text"
  },
];
