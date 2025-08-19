import { useAppSelector } from "../../store/hooks";

const LoadingSpinner = () => {
  const { darkMode } = useAppSelector((state) => state.preferences);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div
          className={`w-12 h-12 rounded-full absolute border-4 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        ></div>

        <div
          className={`w-12 h-12 rounded-full animate-spin border-4 ${
            darkMode
              ? "border-t-blue-400 border-r-blue-400 border-b-transparent border-l-transparent"
              : "border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent"
          }`}
        ></div>

        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
            darkMode ? "bg-blue-400" : "bg-blue-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
