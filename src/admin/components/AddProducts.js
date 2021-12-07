import Dropdown from "@restart/ui/esm/Dropdown";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Container, DropdownButton, Row } from "react-bootstrap";
import {
  Button,
  Form,
  Input,
  Label,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
import { useUserContext } from "../contextapi";
import List from "./List";

function AddProducts() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  // const [category, setcategory] = useState("");
  const [image, setimage] = useState({});
  const [stock, setStock] = useState(0);
  const [shipping, setShipping] = useState(false);
  // const [rating, setrating] = useState("");
  const [sizes, setSizes] = useState([
    {
      id: 1,
      name: "x",
      value: "x",
    },
    {
      id: 2,
      name: "l",
      value: "l",
    },
    {
      id: 3,
      name: "m",
      value: "m",
    },
  ]);

  //const [size, setSize] = useState([]);
  const [selected, setSelected] = useState([]);
  const [category, setCategory] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  let categoryOptions = [
    { id: "1", value: "Men", text: "Men" },
    { id: "2", value: "Women", text: "Women" },
  ];

  const { user, setUser } = useUserContext();
  let userJWT = user.jwt;

  const handleSubmit = async (e) => {
    if (
      title === "" &&
      price === "" &&
      description === "" &&
      image === "" &&
      stock === "" &&
      selected === "" &&
      shipping === "" &&
      category === null
    ) {
      return window.alert("fill all the forms please");
    }
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log("data", data);
    data.append("id", id);
    data.append("size", selected);
    data.append("category", category);
    const payload = Object.fromEntries(data.entries());
    console.log(payload);
    console.log(JSON.stringify(payload));
    //empty all string///////////
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + userJWT);

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: myHeaders,
    };

    data.append("image", image);

    await axios.post("http://localhost:4000/image", data);

    await fetch("http://localhost:4000/v1/admin/editproduct", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    setShouldRender(true);
  };

  useEffect(() => {
    if (shouldRender) {
      setShouldRender(false);
      setTitle("");
      setprice("");
      setdescription("");
      setimage("");
      setStock("");
      setSelected("");
      setShipping("");
      setCategory(null);
    }
  }, [setShouldRender]);

  const onChange = (e, id) => {
    const name = e.target.value;
    let selectedSize = selected;
    let checked = e.target.checked;
    let find = selectedSize.indexOf(id);

    // if (find > -1) {
    //   selectedSize.splice(find, 1);
    // } else {
    //   selectedSize.push(name);
    // }

    if (checked) {
      selectedSize.push(name);
    } else {
      var index = selectedSize.indexOf(name);
      selectedSize.splice(index, 1);
    }

    let filteredArray = selectedSize.filter(function (item, pos) {
      return selectedSize.indexOf(item) === pos;
    });

    setSelected(filteredArray);
    // setSelected(selectedSize);
    console.log(filteredArray);
    console.log(selectedSize);
  };

  if (user === "") {
    return <h3>login First </h3>;
  }
  //category
  return (
    <Container>
      <Row class="py-5">
        <Col lg={3}>
          <List />
        </Col>
        <Col lg={6}>
          {" "}
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <div>
                <Label size="big">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </Form.Field>

            <Form.Field>
              {" "}
              <div>
                <Label size="big">Price</Label>
                <Input
                  type="number"
                  name="price"
                  placeholder="price"
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field>
              {" "}
              <div>
                <Label size="big">Description</Label>
                <TextArea
                  placeholder="product details"
                  name="description"
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <Label size="big">Select Sizes</Label>
              {sizes.map((item) => {
                return (
                  <label key={item.id}>
                    <input
                      type="checkbox"
                      value={item.value}
                      onChange={(e) => onChange(e, item.id)}
                      selected={selected.includes(item.id)}
                    ></input>
                    <span>{item.name}</span>
                  </label>
                );
              })}
            </Form.Field>
            <Form.Field>
              <Label size="big">Choose Category</Label>
              <select
                required
                onChange={(e) => setCategory(e.target.value) || null}
                className="browser-default custom-select"
              >
                <option value="">Please Select</option>
                {categoryOptions.map((i) => {
                  return (
                    <option key={i.id} value={i.id} name="category">
                      {i.text}
                    </option>
                  );
                })}
              </select>
            </Form.Field>
            <Form.Field>
              <div>
                <Label size="big">Stock</Label>
                <Input
                  type="number"
                  name="stock"
                  placeholder="stock"
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <Label size="big">Free Shipping</Label>
              <Radio
                label="Free Shipping??"
                onClick={(e) => setShipping(!shipping)}
                value={shipping}
                name="shipping"
                checked={shipping ? true : false}
              />
            </Form.Field>
            <Form.Field>
              <Label size="big">Image</Label>
              <Input
                type="file"
                onChange={(e) => setimage(e.target.files[0])}
                multiple="multiple"
                placeholder="select image"
              ></Input>
            </Form.Field>
            <Button size="big">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProducts;
