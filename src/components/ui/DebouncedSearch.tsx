import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const DebouncedSearch = ({
  onSearch,
  placeholder = "Search content...",
  debounceTime = 500,
}: {
  onSearch: (term: string) => void;
  placeholder?: string;
  debounceTime?: number;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(searchTerm);
      setIsTyping(false);
    }, debounceTime);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, onSearch, debounceTime]);

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        className={`block w-full p-2 pl-10 text-sm border rounded-lg ${
          isTyping ? "ring-2 ring-blue-500" : ""
        } bg-gray-700 border-gray-600 placeholder-gray-400 text-white`}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsTyping(true);
        }}
      />

      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default DebouncedSearch;
