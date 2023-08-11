import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { donation } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  }

  if (paidFor) {
    alert("Disfruta del viaje!");
  }

  if (error) {
    alert(error);
  }

  const FUNDING_SOURCES = [
    FUNDING.PAYPAL
  ];

  const initialOptions = {
    clientId: "AUhavhSMBFBY08HaRDVYAVtP0_opyZj2sMf3E8iVWlf5lvPQSex2_n4YyP_-1kD6LonYzrY0crPXzjXP",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {FUNDING_SOURCES.map(fundingSource => (
        <PayPalButtons
          fundingSource={fundingSource}
          key={fundingSource}
          style={{
            layout: 'vertical',
            shape: 'rect',
            color: (fundingSource === FUNDING.PAYLATER) ? 'gold' : '',
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: donation.description,
                  amount: {
                    value: donation.price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, action) => {
            const order = await action.order.capture();
            console.log("order", order);
            handleApprove(data.orderID);
          }}
          onCancel={() => { }}
          onError={(err) => {
            setError(err);
            console.log("PayPal Checkout onError", err);
          }}
        />
      ))}
    </PayPalScriptProvider>
  )
}

export default PaypalCheckoutButton;
