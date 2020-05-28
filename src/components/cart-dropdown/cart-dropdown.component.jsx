import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
