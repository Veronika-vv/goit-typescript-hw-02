import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  images: {
    id: string;
    urls: {
      small: string;
      full: string;
    };
    alt_description?: string;
  }[];
  handleOpenModel: (currentId: string) => void;
}

export default function ImageGallery({
  images,
  handleOpenModel,
}: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {images.map((data) => (
        <li onClick={() => handleOpenModel(data.id)} key={data.id}>
          <ImageCard data={data} onClick={handleOpenModel} />
        </li>
      ))}
    </ul>
  );
}
