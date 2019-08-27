import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import { getMembers } from '../state/memberReducer'
import { colors } from '../apis/colors'


const DoughnutChart = (props) => {
	const lables = [];
	const data = [];
	const backgroundColor = [];

	props.data.forEach((member, i) => {
		if (member.selected) {
			const value = (props.conflicts ? member.conflicts : member.donors.total)
			lables.push(member.name)
			data.push(value)
			backgroundColor.push(colors[i])
		}
	})

	const dataProp = {
	    labels: lables,
	    datasets: [{
	      data: data,
	      backgroundColor: backgroundColor,
	    }],
	};
	const options = {
    	legend: {
	        position: 'left',
	    },
	};

	return (
		<Doughnut
			data={dataProp}
			options={options}
		/>
	)
}




const mapStateToProps = (state) => {
	

	return {data: getMembers(state)}
}

export default connect(mapStateToProps)(DoughnutChart)