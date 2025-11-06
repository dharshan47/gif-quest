import React from "react";
import { Input } from "./ui/input";

interface Props {
  query: string;
  setQuery: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <div>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Gifs"
      />
    </div>
  );
};

export default SearchBar;
