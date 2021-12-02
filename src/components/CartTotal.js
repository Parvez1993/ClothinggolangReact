import React from "react";
import { Table } from "semantic-ui-react";
import { useCartContext } from "../context/cart_context";

function CartTotal() {
  const { total_amount, shipping_fee } = useCartContext();
  console.log(total_amount, shipping_fee);
  return (
    <>
      <div>
        <h3>Summary</h3>
        <Table collapsing size="large">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>BDT {total_amount}</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Tax</Table.HeaderCell>
              <Table.HeaderCell>BDT {shipping_fee}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>Total Price</Table.HeaderCell>
              <Table.HeaderCell>
                BDT {total_amount + shipping_fee}
              </Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </>
  );
}
export default CartTotal;
