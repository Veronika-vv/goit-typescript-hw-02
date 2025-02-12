import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
  return (
    <button className={css.button} onClick={() => onLoadMore()} type="button">
      Load more
    </button>
  );
}
