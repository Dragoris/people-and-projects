import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import { getTypes } from '../state/typeReducer'
import { colors } from '../apis/colors'


const YearsBarChart = (props) => (
	<div style={{position: 'relative'}}>
		<Bar
			data={props.data}
			options={props.options}

		/>
	</div>
)

const mapStateToProps = (state) => {

	// console.log(state)
	let uniqueYears = {}
	const lables = []
	const datasets = []


	getTypes(state).forEach(type => {
		if (type.selected) {
			Object.keys(type.years).forEach(year => {
				uniqueYears[year] = []
			})
		}
	})

	const yearsList = Object.keys(uniqueYears).sort()
	// console.log(yearsList)
	
	let myColors = colors
	getTypes(state).forEach((type, i) => {
		if (type.selected) {

			lables.push(type.name)
			const data = []

			yearsList.forEach(year => {

				const count = type.years[year]

				if (count) {
									// console.log(count)

					data.push(count)
				}
				else {
					data.push(0)				
				}
				
			})

			datasets.push({
	    		data,
	    		backgroundColor: colors[i],
	    		stack: '1',
	    		label: type.name,
	    		key: i
	    	})
			

		}

	})

	const dataProp = {
	    labels: yearsList,
	    datasets
	   
	};
	const options = {
    	options: {
		  scales: {
		    xAxes: [{ stacked: true }],
		  },
		  maintainAspectRatio: false
		}
	};
	return {data: dataProp, options: options}
}

export default connect(mapStateToProps)(YearsBarChart)