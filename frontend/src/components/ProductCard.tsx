import React from "react";
import { Product } from "../types/Product";
import { formatPrice } from "../utils/price";
import { Link } from "react-router-dom"

const ProductCard = ({ product, key }: {product: Product, key:number }) => {
  return (
    <Link to={`/items/${product.id}`} key={key} className={`product-card`}>
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>

        {product.seller && (
          <p className="product-card__seller">
            Por {typeof product.seller === "string" ? product.seller : product.seller.nickname}
          </p>
        )}

        <div className="product-card__pricing">
          <div className="product-card__price">{formatPrice(product.price)}</div>
          <div className="product-card__installments">
            Mismo precio en 9 cuotas de {formatPrice(product.price / 9)}
          </div>
        </div>

        <div className="product-card__shipping">Envío gratis</div>

        {product.condition && product.condition !== "new" && (
          <div className="product-card__condition">
            {product.condition === "used" ? "Usado" : "Reacondicionado"}
          </div>
        )}
      </div>
    </Link>
  )
}

export default ProductCard