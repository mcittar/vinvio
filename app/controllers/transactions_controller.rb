class TransactionsController < ApplicationController
	before_action :authenticate_user!, only: [:create]

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
			# redirect to pickup URL on frontend
		rescue Stripe::CardError => e
			@error = e
			# render errors
		end
	end
end
