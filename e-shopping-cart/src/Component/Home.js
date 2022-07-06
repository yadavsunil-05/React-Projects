import { cartStore } from "../Context/ContextStore"
import { useContext } from "react"
import Filter from "./Filter"
import "../style.css"
import SingleProduct from "./SingleProduct"

const Home = () => {

  const {
    state: { items },
    filterState: { byStock,
      byFastDelivery,
      byRating,
      sort, searchQuery } } = useContext(cartStore)

  console.log(items);
  const transFromProducts = () => {
    let sortedProducts = items
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === "LowToHigh" ? a.price - b.price : b.price - a.price))
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(prod => Math.ceil(prod.rating.rate) >= byRating)
    }

    return sortedProducts
  }



  return <>
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transFromProducts().map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  </>
}

export default Home