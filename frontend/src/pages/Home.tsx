import { useEffect, useState } from "react"
import axios from "axios";
import ProductCard from "../components/ProductCard.tsx";
import "../styles/searchList.scss"

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/items")
        setItems(data.items)
      } catch (err) {
        console.error("Error al cargar productos", err)
      }
    }

    fetchItems()
  }, [])

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
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
