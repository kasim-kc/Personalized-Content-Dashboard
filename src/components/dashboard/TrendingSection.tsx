import { useAppSelector } from "../../store/hooks";
import ContentCard from "./ContentCard";
import LoadingSpinner from "../ui/LoadingSpinner";

const TrendingSection = () => {
  const { trending, status } = useAppSelector((state) => state.content);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
      {status === "loading" ? (
        <LoadingSpinner />
      ) : trending.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No trending content available</p>
        </div>
      )}
    </div>
  );
};

export default TrendingSection;
