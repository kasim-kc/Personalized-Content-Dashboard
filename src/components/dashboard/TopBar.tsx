import { FiBell, FiHelpCircle, FiMenu } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import DarkModeToggle from "../ui/DarkModeToggle";
import DebouncedSearch from "../ui/DebouncedSearch";
import { useState } from "react";
import { searchContent } from "../../features/content/contentSlice";

const TopBar = () => {
  const { darkMode } = useAppSelector((state) => state.preferences);
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
    dispatch(searchContent(term));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-10 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } border-b ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } transition-colors duration-300`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <FiMenu
                className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                size={20}
              />
            </button>

            <div className="hidden md:block w-64 lg:w-96">
              <DebouncedSearch onSearch={handleSearch} />
            </div>
          </div>

          {/* Right side - Icons and user dropdown */}
          <div className="flex items-center space-x-4">
            <button
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <FiHelpCircle
                className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                size={20}
              />
            </button>

            <button
              className={`p-2 rounded-lg relative ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <FiBell
                className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                size={20}
              />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            <DarkModeToggle />

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                U
              </div>
              <span
                className={`hidden lg:inline ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                User
              </span>
            </div>
          </div>
        </div>

        {/* Mobile search - appears below on small screens */}
        <div className="md:hidden px-4 pb-4">
          <DebouncedSearch onSearch={handleSearch} />
        </div>
      </header>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default TopBar;
