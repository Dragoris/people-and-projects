import { members} from '../apis/council-members'



const memberState = [];
members.forEach((member) => {
	memberState.push({
		member: member.DistrictNum,
		selected: true,
		name: member.CName,
		voteY: member.Vote_Y,
		voteN: member.Vote_N,
		voteA: member.Vote_A,
		district: member.DISTRICT,
		term: member.TERM_REMAINING,
		conflicts: member.CONFLICTS,
	})
})

export const initialState = {
	memberState,
}