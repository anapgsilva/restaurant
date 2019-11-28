import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Form, Col} from 'react-bootstrap';


    const  PaymentForm = (props) => {

     function handleToken(token){
        console.log(token);

}
    return (
        <div className="container">
            
            <StripeCheckout stripeKey="pk_test_JhdcAxGUY3owc3ECy0W1PWGC0048vo2QDZ"
            token={handleToken}
            name="Momma"
            currency="AUD"
            email=""
            />

        </div>
    )
}



export default PaymentForm;
