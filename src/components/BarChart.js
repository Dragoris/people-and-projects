import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import { getMembers } from '../state/memberReducer'

const BarChart = (props) => (
	<div style={{position: 'relative', height: '30vh'}}>
		<Bar
			data={props.data}
			options={props.options}

		/>
	</div>
)

const mapStateToProps = (state) => {

	const lables = [];
	const assoc = [];
	const business = [];
	const other = [];

	getMembers(state).forEach((member, i) => {
		if (member.selected) {
			assoc.push(member.donors.association)
			other.push(member.donors.other)
			business.push(member.donors.business)
			lables.push(member.name)
		}
	})

	const dataProp = {
	    labels: lables,
	    datasets: [{
	    	label: 'Business',
	    	data: business,
	    	backgroundColor: '#3B71DC',
	    },
	    {
	    	label: 'Association',
	    	data: assoc,
	    	backgroundColor: '#444D5F',
	    },
	    {
	    	label: 'Other',
	    	data: other,
	    	backgroundColor: '#165F1E',
	    }],
	};
	const options = {
    	legend: {
	        position: 'bottom',
	    },
	    maintainAspectRatio: false
	};
	return {data: dataProp, options: options}
}

export default connect(mapStateToProps)(BarChart)