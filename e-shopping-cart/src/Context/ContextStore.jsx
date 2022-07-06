import React, { createContext, useReducer } from "react"
import faker from "faker"
import Reducer from "./Reducer"
import products from "../Products/products"

const cartStore = createContext()
faker.seed(99);

function ContextStore({ children }) {

  const items = products.map((prod) => ({
    ...prod,
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
  }));


  const initialState = {
    items: items,
    cart: [],
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <cartStore.Provider value={{ state, dispatch }}>
      {children}</cartStore.Provider>
  )
}

export default ContextStore
export { cartStore }