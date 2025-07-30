import { Search } from "lucide-react"
import '../styles/header.scss'

export default function Header() {
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
          <div className="search-bar">
            <input type="text" className="search-bar__input" placeholder="Buscar productos, marcas y más..." />
            <button className="search-bar__button" type="submit">
              <Search className="search-bar__icon" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}