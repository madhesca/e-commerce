import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_IAFXICB8WU95OxB5Y0wT4hzW00VdZRpIdU";

  const onToken = token => {
    console.log(token);
    alert("Your payment of  is successful");
  };

  return <StripeCheckout label="Pay Now" name="E-commerce" billingAddress="mpchavillo@gmail.com" shippingAddress="c/o Iponan CDO City, Philippines" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeCheckoutButton;
