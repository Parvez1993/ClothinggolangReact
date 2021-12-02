import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./product_context";

const FilterContext = React.createContext();
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    size: "all",
    categories: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const gridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const listView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  //first update sort
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  //sort products
  const updataSort = (value) => {
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "size") {
      value = e.target.dataset.size;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "size") {
      value = e.target.dataset.size;
    }
    if (name === "shipping") {
      value = e.target.checked;
    }

    console.log("name,value", name, value);

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, gridView, listView, updataSort, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
