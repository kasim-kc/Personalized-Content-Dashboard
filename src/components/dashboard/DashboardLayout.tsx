import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useAppSelector } from "../../store/hooks";

const DashboardLayout = () => {
  const { darkMode } = useAppSelector((state) => state.preferences);

  return (
    <div
      className={`min-h-screen flex ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <TopBar />
        <motion.main
          className="flex-1 p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
