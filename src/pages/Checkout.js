import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form, Button, Select } from "semantic-ui-react";
import CartContent from "../components/CartContent";
import CartTotal from "../components/CartTotal";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../admin/contextapi";
import axios from "axios";

const City = [
  { key: "1", value: "Dhaka", text: "Dhaka" },
  { key: "2", value: "Chittagong", text: "Chittagong" },
  { key: "3", value: "Sylhet", text: "Sylhet" },
];

function Checkout() {
  const { cart, total_amount, shipping_fee } = useCartContext();
  const { user } = useUserContext();

  console.log("user", user);
  let CartNew = [];
  let newObject = { product: null };
  console.log(cart);

  if (cart) {
    cart.map((i) => {
      let data = {
        id: i.id,
        size: i.size,
        name: i.name,
        price: i.price,
        quanity: i.amount,
      };
      return CartNew.push(data);
    });

    newObject.product = CartNew;
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" &&
      phone === "" &&
      city === "" &&
      address === "" &&
      postal === ""
    ) {
      return window.alert("fill all the forms please");
    }
    const data = new FormData(e.target);
    data.append("City", city);
    data.append("UserId", user.id);
    data.append("total", total_amount + shipping_fee);

    const payload = Object.fromEntries(data.entries());
    console.log(JSON.stringify(payload));
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
    };

    const requestOption2 = {
      method: "POST",
      body: JSON.stringify(newObject),
    };

    await axios.post("http://localhost:4000/v1/cart", newObject);
  };
  if (cart === "") {
    return (
      <>
        <div
          className="text-center"
          style={{ height: "90vh", marginTop: "200px" }}
        >
          <h3 className="">Nothing to buy please choose something</h3>
          <Link to="/products">
            <Button>Buy Something</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>
              Products will be delivered to the information provided. Our Sales
              person will call for confirmation
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Billing Name</label>
                <input
                  placeholder="Name"
                  type="text"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Billing Phone Number</label>
                <input
                  placeholder="Phone number"
                  type="text"
                  name="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Pick Your City</label>
                <select
                  required
                  onChange={(e) => setCity(e.target.value) || null}
                  className="browser-default custom-select"
                >
                  <option value="">Please Select</option>
                  {City.map((i) => {
                    return (
                      <option key={i.id} value={i.value} name="category">
                        {i.text}
                      </option>
                    );
                  })}
                </select>
              </Form.Field>
              <Form.Field>
                <label>Your Full Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  name="Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Field>

              <Form.Field>
                <label>Postal zip code</label>
                <input
                  placeholder="postal zip"
                  type="text"
                  name="PostalCode"
                  required
                  onChange={(e) => setPostal(e.target.value)}
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Col lg={4}>
            <CartContent />
            <CartTotal />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
