import { Search } from "lucide-react";
import "../styles/header.scss";

export default function Header({
  query,
  setQuery,
  onSubmit,
}: {
  query: string;
  setQuery: (query:string) => void;
  onSubmit: (query: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img
            src="/images/meli.png"
            alt="Mercado Libre"
            className="header__logo-image"
          />
        </div>

        <div className="header__search">
          <form className="search-bar" onSubmit={onSubmit}>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Buscar productos, marcas y más..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-bar__button" type="submit">
              <Search className="search-bar__icon" size={20} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
