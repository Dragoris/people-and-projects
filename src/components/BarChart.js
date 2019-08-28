import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import { colors } from '../apis/colors'
import { getMembers } from '../state/memberReducer'

const BarChart = (props) => (
	<div className="d-flex flex-column justify-content-center h-100" style={{minHeight: '350px'}}>
		<Bar
			data={props.data}
		/>
	</div>
)

const mapStateToProps = (state) => {

	const lables = [];
	const assoc = [];
	const business = [];
	const other = [];
	const backgroundColor = [];

	getMembers(state).forEach((member, i) => {
		if (member.selected) {
			assoc.push(member.donors.association)
			other.push(member.donors.other)
			business.push(member.donors.business)
			lables.push(member.name)
			backgroundColor.push(colors[i])
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
	return {data: dataProp}
}

export default connect(mapStateToProps)(BarChart)