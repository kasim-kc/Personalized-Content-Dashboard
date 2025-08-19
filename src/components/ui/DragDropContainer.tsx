import { motion, Reorder } from "framer-motion";
import ContentCard from "../dashboard/ContentCard";
import type { ContentItem } from "../../features/content/types";

const DragDropContainer = ({
  items,
  onReorder,
}: {
  items: ContentItem[];
  onReorder: (newOrder: ContentItem[]) => void;
}) => {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={onReorder}
      className="space-y-4"
    >
      {items.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentCard item={item} />
          </motion.div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default DragDropContainer;
