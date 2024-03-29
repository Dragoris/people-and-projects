import { initialState } from './initialStateData'

const members = initialState.memberState
export default (state = members, action) => {
	switch (action.type) {
		case 'TOGGLE_MEMBER':
			return state.map(mem => {
				if (mem.member !== action.payload) {
					return mem
				}
				else {
					return {
						...mem,
						selected: !mem.selected
					}
				}
			})
		default:
			return state;
	}
}

export const getMembers = (state) => {
	return state.memberReducer
}
export const getSelectedMembers = (state) => {
	return state.memberReducer.filter(member => member.selected)
}