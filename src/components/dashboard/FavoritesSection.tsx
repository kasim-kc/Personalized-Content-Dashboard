import { useAppSelector } from "../../store/hooks";
import ContentCard from "./ContentCard";
import LoadingSpinner from "../ui/LoadingSpinner";

const FavoritesSection = () => {
  const { favorites } = useAppSelector((state) => state.preferences);
  const { feed, status } = useAppSelector((state) => state.content);

  const favoriteItems = feed.filter((item) => favorites.includes(item.id));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Your Favorites</h2>
      {status === "loading" ? (
        <LoadingSpinner />
      ) : favoriteItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No favorites yet. Start adding some!</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesSection;
