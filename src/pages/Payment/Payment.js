import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51N0kpOBCZp0IjDn9GnAwwzoouTzrlKxrbuzK9o0dqw3EE8HVNp9I5L7nfvwDSf8TGwBMbQR4gKGS2C2rAhfKJKeH00ODi2Aqvh"
);

const Payment = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { title, amount } = data;
  if (navigation.state === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-center">
      <h2 className="text-3xl">
        Payment for <strong className="text-green-700">{title}</strong>
      </h2>
      <p className="my-3">
        Please pay <strong>{amount}</strong> for your donation
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
