import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement; // Типізуємо як форму
    const query = (
      form.elements.namedItem("search") as HTMLInputElement
    ).value.trim(); // Ось так звертаємося до елемента за ім'ям

    if (!query) {
      toast.error("Please enter a search query!");
      return;
    }

    handleSearch(query);
    form.reset();
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={onSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
