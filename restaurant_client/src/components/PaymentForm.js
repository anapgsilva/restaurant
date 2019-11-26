import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CheckOut from './CheckOut';


    const  PaymentForm = (props) => {

     function handleToken(token){
        console.log(token);

}
    return (
        <div className="container">
            <StripeCheckout stripeKey="pk_test_JhdcAxGUY3owc3ECy0W1PWGC0048vo2QDZ"
            token={handleToken}/>

        </div>
    )
}



export default PaymentForm;
