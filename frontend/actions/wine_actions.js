import * as WineUtil from '../util/wine_util';
export const RECEIVE_WINES = 'RECEIVE_WINES';
export const RECEIVE_WINE = 'RECEIVE_WINE';

export const getWines = () => dispatch => {
	WineUtil.scrapeWines()
		.then(returned => dispatch(receiveWines(returned)))
};

export const getWine = wine => dispatch => {
	WineUtil.scrapeWine(wine)
		.then(returned => dispatch(receiveWine(returned)))
};

export const receiveWines = wines => ({
	type: RECEIVE_WINES,
	wines
});

export const receiveWine = wine => ({
	type: RECEIVE_WINE,
	wine
});