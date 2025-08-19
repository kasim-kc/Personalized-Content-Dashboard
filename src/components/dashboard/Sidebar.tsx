import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiStar,
  FiTrendingUp,
  FiSettings,
  FiBookmark,
} from "react-icons/fi";
import { useAppSelector } from "../../store/hooks";

const Sidebar = () => {
  const { darkMode } = useAppSelector((state) => state.preferences);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { path: "/", icon: <FiHome size={20} />, label: "Home" },
    { path: "/trending", icon: <FiTrendingUp size={20} />, label: "Trending" },
    { path: "/favorites", icon: <FiStar size={20} />, label: "Favorites" },
    { path: "/saved", icon: <FiBookmark size={20} />, label: "Saved" },
    { path: "/settings", icon: <FiSettings size={20} />, label: "Settings" },
  ];

  return (
    <div
      className={`
      w-64 h-screen fixed top-0 left-0 z-20
      transform transition-transform duration-300 ease-in-out
      ${isMobile ? "-translate-x-full" : "translate-x-0"}
      md:translate-x-0
      ${darkMode ? "bg-gray-800" : "bg-white"} 
      border-r ${darkMode ? "border-gray-700" : "border-gray-200"}
      transition-colors duration-300
    `}
    >
      <div className="p-4 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          C
        </div>
        <h1
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          ContentDash
        </h1>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    darkMode
                      ? isActive
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                      : isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`absolute bottom-0 w-full p-4 border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 font-medium">U</span>
          </div>
          <div>
            <p
              className={`font-medium ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Kasim Chhota
            </p>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              kasimsactive1@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
