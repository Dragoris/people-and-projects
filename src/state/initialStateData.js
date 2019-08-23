import { members } from '../apis/council-members'
import { councilDonors } from '../apis/council-donors'


const memberState = [];
members.forEach((member) => {
	memberState.push({
		member: member.LName,
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

const donors = {
	Jones: {
		other: 0,
		business: 0,
		association: 0
	},
	Jimenez: {
		other: 0,
		business: 0,
		association: 0
	},
	Peralez: {
		other: 0,
		business: 0,
		association: 0
	},
	Diep: {
		other: 0,
		business: 0,
		association: 0
	},
	Carrasco: {
		other: 0,
		business: 0,
		association: 0
	},
	Davis: {
		other: 0,
		business: 0,
		association: 0
	},
	Esparza: {
		other: 0,
		business: 0,
		association: 0
	},
	Arenas: {
		other: 0,
		business: 0,
		association: 0
	},
	Foley: {
		other: 0,
		business: 0,
		association: 0
	},
	Khamis: {
		other: 0,
		business: 0,
		association: 0
	},
	Liccardo: {
		other: 0,
		business: 0,
		association: 0
	}
}

councilDonors.forEach(donor => {
	if (donor.ENTITY === 'COM' || donor.ENTITY === 'SCC') {
		donors[donor.LNAME]['association'] += 1
	}
	else if (donor.ENTITY === 'PTY' || donor.ENTITY === 'IND') {
		donors[donor.LNAME]['other'] += 1
	}
	else if (donor.ENTITY === 'OTH') {
		donors[donor.LNAME]['business'] += 1
	}
})

memberState.forEach(member => {
	member['donors'] = donors[member.member]
})

export const initialState = {
	memberState,
}