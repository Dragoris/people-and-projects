export default (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_PAGE':
			return !state
		default:
			return state
	}

}