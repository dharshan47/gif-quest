import GifGrid from "@/components/GifGrid";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto text-center space-y-4 p-5 ">
      <h1 className="text-2xl font-bold">Gif Quest</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <GifGrid query={query} />
    </div>
  );
};

export default Home;
