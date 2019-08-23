import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import { getMembers } from '../state/memberReducer'
import { colors } from '../apis/colors'


const DoughnutChart = (props) => (
	<Doughnut
		data={props.data}
	/>
)




const mapStateToProps = (state) => {
	const lables = [];
	const data = [];
	const backgroundColor = [];

	getMembers(state).forEach((member, i) => {
		if (member.selected) {
			lables.push(member.name)
			data.push(member.conflicts)
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

	return {data: dataProp}
}

export default connect(mapStateToProps)(DoughnutChart)