import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchContent,
  reorderFeed,
  setOriginalFeed,
} from "../../features/content/contentSlice";
import DragDropContainer from "../ui/DragDropContainer";
import LoadingSpinner from "../ui/LoadingSpinner";
import type { ContentItem } from "../../features/content/types";

const FeedSection = () => {
  const dispatch = useAppDispatch();
  const { feed, status, originalFeed } = useAppSelector(
    (state) => state.content
  );
  const { categories } = useAppSelector((state) => state.preferences);

  useEffect(() => {
    const loadData = async () => {
      const result = await dispatch(fetchContent(categories));
      if (fetchContent.fulfilled.match(result)) {
        dispatch(setOriginalFeed(result.payload));
      }
    };
    loadData();
  }, [dispatch, categories]);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "failed") return <div>Error loading content</div>;

  return (
    <div className="p-4 ml-4">
      <h2 className="text-2xl font-bold mb-6">
        {originalFeed && originalFeed.length !== feed.length
          ? `Search Results (${feed.length})`
          : "Your Personalized Feed"}
      </h2>
      {feed.length > 0 ? (
        <DragDropContainer
          items={feed}
          onReorder={(newOrder: ContentItem[]) => {
            dispatch(reorderFeed(newOrder));
          }}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No content available. Update your preferences.
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedSection;
