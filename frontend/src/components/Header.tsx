import { Search } from "lucide-react";
import '../styles/header.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/items?search=${query}`);
    }
  };

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
          <form className="search-bar" onSubmit={handleClick}>
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
