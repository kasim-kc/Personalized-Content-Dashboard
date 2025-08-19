import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  toggleCategory,
  toggleDarkMode,
} from "../../features/preferences/preferencesSlice";

const categories = [
  "technology",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
];

const SettingsPanel = () => {
  const dispatch = useAppDispatch();
  const { categories: selectedCategories, darkMode } = useAppSelector(
    (state) => state.preferences
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Theme</h3>
          <label className="flex items-center space-x-3 cursor-pointer">
            <span>Dark Mode</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={() => dispatch(toggleDarkMode())}
              />
              <div
                className={`w-10 h-4 rounded-full shadow-inner transition-colors ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`absolute w-6 h-6 rounded-full shadow -left-1 -top-1 transition-transform ${
                  darkMode ? "transform translate-x-6 bg-blue-500" : "bg-white"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Content Preferences</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => dispatch(toggleCategory(category))}
                  className="rounded text-blue-500 focus:ring-blue-400"
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
