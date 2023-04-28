import { ADD_FAV, REMOVE_FAV } from './types';

const initialState = {
	myFavorites: []
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			const listForAdd = [...state.myFavorites];
			listForAdd.push(payload);
			return { ...state, myFavorites: listForAdd };
		case REMOVE_FAV:
			const listForDelete = [...state.myFavorites];
			const filteredList = listForDelete.filter(listItem => listItem.id !== parseInt(payload, 10));
			return { ...state, myFavorites: filteredList };
		default:
			return { ...state };
	}
};

export default rootReducer;