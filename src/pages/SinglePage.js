import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProductsContext } from "../context/product_context";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";
import styled from "styled-components";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import Hero from "../components/Hero";
import AddtoCart from "../components/AddtoCart";

function SinglePage() {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`http://localhost:4000/v1/product/${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  let { title, price, size, description, image, stock, shipping, categories } =
    product;

  if (categories) {
    categories = Object.values(categories);
  } else {
    categories = [];
  }

  console.log(image);
  return (
    <>
      <Container>
        <Wrapper>
          <div className="navigation">
            <Hero link={`product/ ${title}`} products />
          </div>

          <Row>
            <Col lg={6}>
              <div className="image">
                <img src={image} alt="aa" className="product-image" />
              </div>
            </Col>
            <Col lg={4} className="offset-1">
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="tag" />
                  Details
                </Header>
              </Divider>

              <Table definition>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={3}>Model Name</Table.Cell>
                    <Table.Cell>{title}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Price</Table.Cell>
                    <Table.Cell>Bdt {price}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{description}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Size</Table.Cell>
                    <Table.Cell>
                      {size
                        ? size.map((i, keys) => {
                            return <p key={keys}>{i}</p>;
                          })
                        : "loading"}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Stock</Table.Cell>
                    <Table.Cell>
                      {stock > 0 ? "In Stock" : "Out of Stock"}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Shipping</Table.Cell>
                    <Table.Cell>
                      {shipping ? "free shipping" : "Delivery charge 50 Taka"}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Divider />

              {stock > 0 ? <AddtoCart product={product} /> : ""}
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  margin: 100px 0;
  .product-image {
    width: 100%;
  }
`;

export default SinglePage;
