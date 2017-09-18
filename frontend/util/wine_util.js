export const scrapeWines = () => {
	return $.ajax({
		method: 'GET',
		url: 'api/wines',
	})
}

export const scrapeWine = wine => {
	return $.ajax({
		method: 'GET',
		url: 'api/wines/:wine',
		data: { wine }
	})
}