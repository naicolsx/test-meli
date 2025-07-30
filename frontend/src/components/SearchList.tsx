import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import "../styles/searchList.scss"

const SearchList = () => {
  const [items, setItems] = useState([])
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get("search")

    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/api/items/search?q=${query}`)
        setItems(data.items)
      } catch (err) {
        console.error("Error search", err)
      }
    }

    if (query) fetchItems()
  }, [location.search])

  const formatPrice = (price) => {
    if (typeof price === "object" && price.amount) {
      return `$ ${price.amount.toLocaleString("es-CO")}`
    }
    return `$ ${price?.toLocaleString("es-CO") || "0"}`
  }

  return (
    <div className="search-results">
      <div className="search-results__container">
        <div className="product-list">
          {items.map((item, index) => (
            <article key={item.id} className={`product-card product-card--${(index)}`}>
              <div className="product-card__image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-card__image"
                />
              </div>

              <div className="product-card__content">
                <h3 className="product-card__title">{item.title}</h3>

                {item.seller && (
                  <p className="product-card__seller">
                    Por {typeof item.seller === "string" ? item.seller : item.seller.nickname}
                  </p>
                )}

                <div className="product-card__pricing">
                  {item.original_price && (
                    <div className="product-card__original-price">
                      <span className="product-card__original-price-text">{formatPrice(item.original_price)}</span>
                      {item.discount_percentage && (
                        <span className="product-card__discount">{item.discount_percentage}% OFF</span>
                      )}
                    </div>
                  )}

                  <div className="product-card__price">{formatPrice(item.price)}</div>
                  <div className="product-card__installments">
                    Mismo precio en 9 cuotas de ${ }
                  </div>
                </div>

                <div className="product-card__shipping">Envío gratis</div>

                {item.condition && item.condition !== "new" && (
                  <div className="product-card__condition">
                    {item.condition === "used" ? "Usado" : "Reacondicionado"}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchList
