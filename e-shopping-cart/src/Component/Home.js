import { cartStore } from "../Context/ContextStore"
import { useContext } from "react"
import Filter from "./Filter"
import "../style.css"
import SingleProduct from "./SingleProduct"

const Home = () => {

  const {
    state: { items },
  } = useContext(cartStore)

  console.log(items);
  return <>
    <div className="home">
      <Filter />
      <div className="productContainer">
        {items.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  </>
}

export default Home