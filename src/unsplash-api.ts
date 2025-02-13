import axios, { AxiosResponse } from "axios";

interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

interface UnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export default async function fetchImages(
  query: string,
  page: number = 1
): Promise<AxiosResponse<UnsplashResponse>> {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID lzZlUtJ9rgPMeD-YMKvtDmBwlCLcoalpHho1u5gg_KA",
    },
  });
  return response;
}
