import { FiMoon, FiSun } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleDarkMode } from "../../features/preferences/preferencesSlice";

const DarkModeToggle = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.preferences);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className={`p-2 rounded-lg ${
        darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
      }`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FiSun className="text-yellow-300" size={20} />
      ) : (
        <FiMoon className="text-gray-600" size={20} />
      )}
    </button>
  );
};

export default DarkModeToggle;
