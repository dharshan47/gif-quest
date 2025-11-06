import { fetchGifs } from "@/lib/giphy";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  query: string;
}
interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const {
    data: gifs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gifs", query],
    queryFn: () => fetchGifs(query),
    placeholderData: keepPreviousData,
  });

  if (error) return <h1>Error while fetching Gifs</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {gifs?.map((gif: Gif) => (
        <div
          key={gif.id}
          className="w-full h-46 rounded shadow-md overflow-hidden"
        >
          <img
            src={gif.images.fixed_height.url}
            alt={gif.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GifGrid;
