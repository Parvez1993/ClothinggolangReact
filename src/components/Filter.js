import React from "react";
import { Checkbox, Segment } from "semantic-ui-react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utliz";
import styled from "styled-components";
function Filter() {
  const {
    filters: {
      text,
      categories,
      company,
      size,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
  } = useFilterContext();

  const sizeSet = getUniqueValues(all_products, "size");
  console.log(sizeSet);

  // categories unused
  // const categoriesSet = getUniqueValues(all_products, "categories");
  // console.log("catset", categoriesSet);
  // const uniqueCategories = new Set();

  // all_products.forEach((p) =>
  //   uniqueCategories.add(...Object.values(p.categories))
  // );
  // var categoryArray = [...uniqueCategories];

  // console.log(categoryArray);

  // // console.log(categoriesSet);

  return (
    <>
      <Segment raised style={{ padding: "5px" }}>
        <div className="filters">
          <div class="ui focus input">
            <input
              type="text"
              placeholder="Search..."
              name="text"
              value={text}
              onChange={updateFilters}
              style={{ width: "150px" }}
            />
          </div>
        </div>
        <h5>price</h5>
        <p className="price">BDT {price}</p>
        <input
          type="range"
          name="price"
          min={min_price}
          max={max_price}
          onChange={updateFilters}
          value={price}
        />
        <div style={{ marginTop: "50px" }}>
          <h5>Sizes</h5>
          <div className="colors">
            {sizeSet.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="size"
                    onClick={updateFilters}
                    data-size="all"
                    className={`${
                      size === "all" ? "all-btn active" : "all-btn"
                    }`}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  name="size"
                  style={{ background: c }}
                  className={`${size === c ? "color-btn active" : "color-btn"}`}
                  data-size={c}
                  onClick={updateFilters}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        {/* <div>
          {" "}
          <h5>category</h5>
          <div>
            {categoryArray.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="categories"
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div> */}
        <div className="form-control shipping">
          <Checkbox
            label="Free Shipping?"
            name="shipping"
            id="shipping"
            onChange={updateFilters}
            defaultChecked
          />
        </div>
      </Segment>
    </>
  );
}

export default Filter;
