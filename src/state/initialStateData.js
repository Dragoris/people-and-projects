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
		contact: {
			Name: member.CName,
			Website: member.WEB,
			Email: member.EMAIL,
			Phone: member.PHONE,
			News: member.City_News,
			Twitter: member.TWITTER,
			Facebook: member.Facebook,
			Liaison: member.Liaison,
			'Liaison Phone': member.Liaison_PHONE,
			'Liaison Email': member.Liaison_EMAIL,
			'Personal Email': member.PERSONAL_EMAIL,


		},

	})
})

const donors = {
	Jones: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Jimenez: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Peralez: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Diep: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Carrasco: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Davis: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Esparza: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Arenas: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Foley: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Khamis: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
	},
	Liccardo: {
		other: 0,
		business: 0,
		association: 0,
		list: [],
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

	donors[donor.LNAME].list.push(donor)
})

memberState.forEach(member => {
	member['donors'] = donors[member.member]
})

export const initialState = {
	memberState,
}