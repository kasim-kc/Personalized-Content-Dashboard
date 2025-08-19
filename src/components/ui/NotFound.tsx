import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { darkMode } = useAppSelector((state) => state.preferences);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className={`px-6 py-3 rounded-lg font-medium ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors`}
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
