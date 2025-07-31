import React, { useState } from "react";
import { Product as ProductType } from "../types/Product";

const Product = ({ product }: { product: ProductType }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price: number) => {
    return `$ ${price?.toLocaleString("es-CO") || "0"}`;
  };

  const thumbnails = [
    "/placeholder.svg?height=60&width=60&text=1",
    "/placeholder.svg?height=60&width=60&text=2",
    "/placeholder.svg?height=60&width=60&text=3",
  ];

  return (
    <>
      <div className="product-detail__content">
        <div className="image-gallery">
          <div className="image-gallery__thumbnails">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className={`image-gallery__thumbnail ${
                  selectedImage === index
                    ? "image-gallery__thumbnail--active"
                    : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={product.image} alt={`Vista ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="image-gallery__main">
            <img
              src={product.image}
              alt={product.title}
              className="image-gallery__main-image"
            />
          </div>
        </div>

        <div className="product-info">
          <div className="product-info__status">
            {product.condition === "new" ? "Nuevo" : "Nuevo"} |{" "}
            {product.sold_quantity || "+100"} vendidos
          </div>

          <h1 className="product-info__title">{product.title}</h1>

          <p className="product-info__seller">
            Por {product.seller?.nickname || "OCEANGREEN ARGENTINA"}
          </p>

          <div className="product-info__pricing">
            <div className="product-info__price">{formatPrice(product.price)}</div>

            <div className="product-info__installments">
              Mismo precio en 9 cuotas de {formatPrice(product.price / 9)}
            </div>
          </div>

          <div className="product-info__shipping">Envío gratis</div>

          <div className="product-info__attribute">
            <span className="product-info__attribute-name">Color:</span>
            <span className="product-info__attribute-value">
              Blanco estelar
            </span>
          </div>
        </div>
      </div>

      <div className="product-description">
        <h2 className="product-description__title">Descripción</h2>
        <div className="product-description__content">{product.description}</div>
      </div>
    </>
  );
};

export default Product;
