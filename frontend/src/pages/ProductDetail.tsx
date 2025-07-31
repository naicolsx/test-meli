import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { Product as ProductType } from "../types/Product";
import axios from "axios";
import "../styles/productDetail.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/items/${id}`
        );
        setProduct(data.item);
      } catch (err) {
        console.error("Error fetching item details", err);
      }
    };

    if (id) fetchItem();
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail">
        <div className="product-detail__container">
          <div className="product-detail__loading">Cargando producto...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail__container">
        <nav className="breadcrumb">
          <a href="#" className="breadcrumb__link">
            Volver al listado
          </a>
          <span className="breadcrumb__separator">|</span>
          <span className="breadcrumb__text">{product.category}</span>
          <div className="breadcrumb__publication">
            Publicación: #{product?.id || "1117020690"}
          </div>
        </nav>
        <Product product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
