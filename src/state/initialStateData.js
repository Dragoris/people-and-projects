import { members } from '../apis/council-members'
import { councilDonors } from '../apis/council-donors'
import { permitsKeyed } from '../apis/permitsKeyed'


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
		term: member['TERM REMAINING'],
		termEnd: member.Term_End,
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
		total: 0,
		list: [],
	},
	Jimenez: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Peralez: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Diep: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Carrasco: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Davis: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Esparza: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Arenas: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Foley: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Khamis: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	},
	Liccardo: {
		other: 0,
		business: 0,
		association: 0,
		total: 0,
		list: [],
	}
}

councilDonors.forEach(donor => {
	const entity = donor.ENTITY
	const name = donor.LAST
	if (entity === 'COM' || entity === 'SCC') {
		donors[name]['association'] += 1
	}
	else if (entity === 'PTY' || entity === 'IND') {
		donors[name]['other'] += 1
	}
	else if (entity === 'OTH') {
		donors[name]['business'] += 1
	}

	if (donor.AMOUNT !== "") {
		donors[name]['total'] += donor.AMOUNT
		donors[name].list.push(donor)
	}

})

memberState.forEach(member => {
	member['donors'] = donors[member.member]
})



const typeState = []
const countedPermits = {}

Object.keys(permitsKeyed).forEach(permit => {
	let duration = 0
	let min = null
	let max = null
	let count = 0

	const list = []
	let statuses = {}

	permitsKeyed[permit].forEach(data => {
		const id = data.PERMITID
		const time = data.DURATION
		const status = data.Status.trim()

		if (!countedPermits[id]) {
			if (min === null || min > time) {
				min = time
			}
			if (max === null || max < time) {
				max = time
			}

			duration += time
			count += 1

			if (statuses[status]) {
				statuses[status]['amount'] += 1
			}
			else {
				statuses[status] = {amount: 1}
			}

			list.push(data)
			


			countedPermits[id] = true


		}
	})

	const avg = Number((duration / count).toFixed(1))
	typeState.push({
		selected: true,
		name: permit,
		time: {
			duration,
			min,
			max,
			avg
		},
		list,
		statuses,
	})

	const longest = typeState.map(type => {
		return [type.name, type.time.avg]
	})
	.sort(function(a, b) {
		return b[1] - a[1]
	})
	.slice(0,15)
	.map(type => {
		return type[0]
	})

	typeState.map(type => {
		if (longest.includes(type.name)) {
			type.selected = true
		}
		else{
			type.selected = false
		}
	})
})

export const initialState = {
	memberState,
	typeState
}