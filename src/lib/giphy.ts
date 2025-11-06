import axios from "axios";

export const fetchGifs = async (query: string) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=12`;

  const { data } = await axios.get(url);
  return data.data;
};
