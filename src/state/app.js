
export default (state = [], action) => {
	switch (action.type) {
		case 'TOGGLE_MEMBER':
			return state.map(mem => {
				if (mem.DistrictNum !== action.payload) {
					return mem
				}
				else {
					return {
						...mem,
						mem: !mem
					}
				}
			})
		default:
			return state;
	}
}