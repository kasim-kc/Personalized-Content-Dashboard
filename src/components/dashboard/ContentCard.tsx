import { motion } from "framer-motion";
import { FiExternalLink, FiStar, FiPlay } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavorite } from "../../features/preferences/preferencesSlice";
import type { ContentItem } from "../../features/content/types";

const ContentCard = ({ item }: { item: ContentItem }) => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.preferences);
  const { favorites } = useAppSelector((state) => state.preferences);
  const isFavorite = favorites.includes(item.id);

  const getContentTypeIcon = () => {
    switch (item.type) {
      case "news":
        return <FiExternalLink className="text-blue-500" />;
      case "movie":
        return <FiPlay className="text-green-500" />;
      case "social":
        return (
          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
            {item.username?.charAt(0).toUpperCase()}
          </div>
        );
      default:
        return null;
    }
  };

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(item.id));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl overflow-hidden shadow-lg w-full ${
        darkMode ? "bg-gray-800" : "bg-white"
      } transition-colors duration-300`}
    >
      {item.image && (
        <div className="h-48 relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x200?text=No+Image";
            }}
          />
          <button
            onClick={handleFavoriteToggle}
            className={`absolute top-2 right-2 p-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-white"
            } shadow-md`}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <FiStar
              className={
                isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
              }
            />
          </button>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {getContentTypeIcon()}
              <span
                className={`text-xs font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {item.type === "news"
                  ? item.source
                  : item.type === "movie"
                  ? "Movie"
                  : `@${item.username}`}
              </span>
              {item.rating && (
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    darkMode
                      ? "bg-gray-700 text-yellow-400"
                      : "bg-yellow-50 text-yellow-600"
                  }`}
                >
                  ⭐ {item.rating.toFixed(1)}
                </span>
              )}
              {item.timestamp && (
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.timestamp}
                </span>
              )}
            </div>
            <h3
              className={`font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {item.title}
            </h3>
            {item.description && (
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } line-clamp-2`}
              >
                {item.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium px-4 py-2 rounded-lg flex items-center space-x-2 ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-50 hover:bg-blue-100 text-blue-600"
              }`}
            >
              {item.type === "news"
                ? "Read Article"
                : item.type === "movie"
                ? "Watch Trailer"
                : "View Post"}
              <FiExternalLink size={14} />
            </a>
          ) : (
            <div className="text-sm text-gray-500">No link available</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContentCard;
