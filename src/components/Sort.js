import React from "react";
import { Segment, Button, Icon, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
function Sort() {
  const { gridView, listView, filtered_products, updataSort } =
    useFilterContext();

  const tagOptions = [
    {
      key: "price-lowest",
      text: "price-lowest",
      value: "price-lowest",
    },
    {
      key: "price-highest",
      text: "price-highest",
      value: "price-highest",
    },
    {
      key: "name-a",
      text: "name-a",
      value: "name-a",
    },
    {
      key: "name-z",
      text: "name-z",
      value: "name-z",
    },
  ];

  const handleDropdown = (event, data) => {
    event.preventDefault();
    const value = data.value;
    if (value) {
      updataSort(value);
    }
  };

  return (
    <Segment raised>
      <Wrapper>
        <div className="main">
          <div className="button">
            <Button.Group>
              <Button icon onClick={gridView}>
                <Icon name="grid layout" />
              </Button>
              <Button icon onClick={listView}>
                <Icon name="list" />
              </Button>
            </Button.Group>
          </div>
          <div className="info">
            Products found{" "}
            <span style={{ color: "red" }}> {filtered_products.length}</span>{" "}
          </div>
          <div className="filter">
            <Dropdown text="Filter Posts" icon="filter">
              <Dropdown.Menu>
                <Dropdown.Menu scrolling>
                  {tagOptions.map((option) => (
                    <Dropdown.Item
                      key={option.value}
                      {...option}
                      onClick={handleDropdown}
                    />
                  ))}
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Wrapper>
    </Segment>
  );
}
const Wrapper = styled.div`
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Sort;
