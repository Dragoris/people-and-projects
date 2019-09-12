import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';

import { getTypes } from '../state/typeReducer'
import { colors } from '../apis/colors'


const PieChart = (props) => {
	const lables = [];
	const data = [];
	const backgroundColor = [];

	const typeObj = {}
	let total = 0
	
	props.types.forEach((type, i) => {
		if (type.selected) {
			Object.keys(type.statuses).forEach(status => {
				const amount = type.statuses[status].amount
				if (typeObj[status]) {
					typeObj[status] += amount
				}
				else{
					typeObj[status] = amount
				}

				total += amount
			})	
		}
	})

	Object.keys(typeObj).forEach((type, i) => {
		const percent = parseFloat(typeObj[type] / total * 100).toFixed(1)
		lables.push(type)
		data.push(percent)
		backgroundColor.push(colors[i])
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
			<Pie
				data={dataProp}
				options={options}
			/>
	)
}




const mapStateToProps = (state) => {
	return {
		types: getTypes(state)
	}
}

export default connect(mapStateToProps)(PieChart)