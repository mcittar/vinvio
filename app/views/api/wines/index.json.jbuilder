@wines.each do |wine|

	json.set! wine.id do
		json.extract! wine, :id, :name, :price, :permalink
	end

end
