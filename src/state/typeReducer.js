import { initialState } from './initialStateData'

const types = initialState.typeState
export default (state = types, action) => {
	switch (action.type) {
		case 'TOGGLE_TYPE':
			return state.map(type => {
				if (type.name !== action.payload) {
					return type
				}
				else {
					return {
						...type,
						selected: !type.selected
					}
				}
			})
			
		default:
			return state;
	}
}

export const getTypes = (state) => {
	return state.typeReducer
}