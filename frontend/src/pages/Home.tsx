import { useEffect, useState } from "react"
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../styles/searchList.scss"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/items")
        setProducts(data.items)
      } catch (err) {
        console.error("Error al cargar productos", err)
      }
    }

    fetchItems()
  }, [])

  return (
    <div className="search-results">
      <div className="search-results__container">
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
