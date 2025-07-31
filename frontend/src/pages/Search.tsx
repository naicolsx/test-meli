import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"
import axios from "axios"
import "../styles/searchList.scss"
import ProductCard from "../components/ProductCard"

const Search = () => {
  const [products, setProducts] = useState([])
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get("search")

    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/api/items/search?q=${query}`)
        setProducts(data.items)
      } catch (err) {
        console.error("Error search", err)
      }
    }

    if (query) fetchItems()
  }, [location.search])

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

export default Search
