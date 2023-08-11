import React, { useContext, useEffect } from 'react';
import PaypalCheckoutButton from './PayPalCheckoutButton';
import { Context } from '../store/appContext';
import useReviewManagement from '../hooks/useReviewManagement';

const Donation = ({ review }) => {

  const { store, actions } = useContext(Context)
  const { } = useReviewManagement();


  const donation = {
    description: "Donación!",
    price: 5,
  };
  return (
    <div className="content-offer-details">
      <div className="offer-payment">

      </div>
      <div className='btn-donation'>
        <h6>Donación</h6>
        <div className="btn-paypal-donation">
          <PaypalCheckoutButton donation={donation} />
        </div>
      </div>
    </div >
  );
};

export default Donation;