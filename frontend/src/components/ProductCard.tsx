import React from "react";
import { Link } from "react-router-dom"

const ProductCard = ({ item, key }) => {

  const formatPrice = (price) => {
    if (typeof price === "object" && price.amount) {
      return `$ ${price.amount.toLocaleString("es-CO")}`
    }
    return `$ ${price?.toLocaleString("es-CO") || "0"}`
  }

  return (
    <Link to={`/items/${item.id}`} key={key} className={`product-card`}>
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
    </Link>
  )
}

export default ProductCard