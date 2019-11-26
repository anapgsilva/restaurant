require 'stripe'

class Api::V1::ChargesController < ApplicationController

    def create 
        Stripe.api_key = 'sk_test_WiMZtKtdEpgnxCF3OjlYy9no009Za15Wcq'

     begin 
        customer = Stripe::Customer.create(
            :email => current_user.email,
            :source => params[:charge][:token]

        )   

        charge = Stripe::Charge.create({
            :customer => customer.id,
            :amount => params[:charge][:amount],
            :description => params[:charge][:description],
            :currency => params[:charge][:currency],

        },
        :idemotency_key => ip_key
    })
rescue Stripe::CardError => e
    render json:{message: 'oops'}, status: :not_acceptable
end
end
end