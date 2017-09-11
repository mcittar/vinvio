class TransactionsController < ApplicationController
	skip_before_action :authenticate_user!, only: [:new, :create]

	def pickup
		@sale = Sale.find_by!(guid: params[:guid])
		@product = @sale.product
	end

	def create
		wine = Wine.find_by!(permalink: params[:permalink])
		token = params[:stripeToken]

		begin
			charge = Stripe::Charge.create(
				amount: product.price,
				currency: "usd",
				source: token,
				description: params[:stripeEmail]
			)
			@sale = wine.sales.create!(
				email: params[:stripeEmail],
				stripe_id: charge.id
			)
		rescue Stripe::CardError => e
			@error = e
		end
	end
end
