import React, { Component } from 'react';
import { injectStripe} from 'react-stripe-elements';

class PaymentForm extends Component {
    state = {  }
    }

    async submit(event){
        let chargeToken = await this.props.stripe.createToken({name:"Name"})
        let charge ={
            token: chargeToken.token.id
        }
        let response = await fetch("The backend charges", {
            method: 'POST',
            headers:{
               'Content-Type': 'application/json',
               'Accept':'application/json',
            },
            body: JSON.stringify({
                charge: charge
            })
        })
        if(response.ok) console.log("Purchase Complete!");
        
    }
    render() { 
        return ( 
            <div>
              <form action="/charge" method="post" id="payment-form">
            <div class="form-row">
             <label for="card-element">
                Credit or debit card
                </label>
             <div id="card-element">
                <!-- A Stripe Element will be inserted here. -->
            </div>

            <!-- Used to display Element errors. -->
         <div id="card-errors" role="alert"></div>
        </div>

        <button>Submit Payment</button>
</form>
            </div>
         );
    }
}
 
export default injectStripe(CheckoutForm);
