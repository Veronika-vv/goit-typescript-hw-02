import axios, { AxiosResponse } from "axios";

interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description?: string;
  likes: number;
  created_at: string;
  description?: string;
}

interface UnsplashResponse {
  results: UnsplashPhoto[];
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
