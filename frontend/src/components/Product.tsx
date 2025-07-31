import React, { useState } from "react";

const Product = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  const formatPrice = (price) => {
    if (typeof price === "object" && price.amount) {
      return `$ ${price.amount.toLocaleString("es-CO")}`
    }
    return `$ ${price?.toLocaleString("es-CO") || "0"}`
  }

  const thumbnails = item.pictures || [
    "/placeholder.svg?height=60&width=60&text=1",
    "/placeholder.svg?height=60&width=60&text=2",
    "/placeholder.svg?height=60&width=60&text=3",
  ]

  return (
    <>
      <div className="product-detail__content">
        <div className="image-gallery">
          <div className="image-gallery__thumbnails">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className={`image-gallery__thumbnail ${selectedImage === index ? "image-gallery__thumbnail--active" : ""
                  }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={item.image} alt={`Vista ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="image-gallery__main">
            <img
              src={item.image}
              alt={item.title}
              className="image-gallery__main-image"
            />
          </div>
        </div>

        <div className="product-info">
          <div className="product-info__status">
            {item.condition === "new" ? "Nuevo" : "Nuevo"} | {item.sold_quantity || "+100"} vendidos
          </div>

          <h1 className="product-info__title">{item.title}</h1>

          <p className="product-info__seller">Por {item.seller?.nickname || "OCEANGREEN ARGENTINA"}</p>

          <div className="product-info__pricing">
            <div className="product-info__price">{formatPrice(item.price)}</div>

            <div className="product-info__installments">
              Mismo precio en {item.installments || 9} cuotas de{" "}
              {formatPrice(item.installments || { amount: 151426 })}
            </div>

          </div>

          <div className="product-info__shipping">Envío gratis</div>

          {item.attributes && (
            <div className="product-info__attributes">
              {item.attributes.map((attr, index) => (
                <div key={index} className="product-info__attribute">
                  <span className="product-info__attribute-name">{attr.name}:</span>
                  <span className="product-info__attribute-value">{attr.value_name}</span>
                </div>
              ))}
            </div>
          )}

          <div className="product-info__attribute">
            <span className="product-info__attribute-name">Color:</span>
            <span className="product-info__attribute-value">Blanco estelar</span>
          </div>
        </div>
      </div>

      <div className="product-description">
        <h2 className="product-description__title">Descripción</h2>
        <div className="product-description__content">
          {item.description}
        </div>
      </div>
    </>

  )
}

export default Product;