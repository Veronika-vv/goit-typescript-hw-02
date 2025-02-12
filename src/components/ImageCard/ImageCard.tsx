interface ImageCardProps {
  data: {
    urls: {
      small: string;
      full: string;
    };
    alt_description?: string;
  };
  onClick: (url: string) => void;
}

export default function ImageCard({
  data: { urls, alt_description },
  onClick,
}: ImageCardProps) {
  const handleClick = () => {
    onClick(urls.full);
  };

  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
