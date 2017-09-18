class Api::WinesController < ApplicationController

	def index
		@wines = Wine.all
	end

	private 

	def wine_params
		params.require(:wine).permit(:name, :price, :permalink, :description)
	end	

end
