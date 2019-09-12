import React from 'react';
import { connect } from 'react-redux';
import { HorizontalBar } from 'react-chartjs-2';

import { getTypes } from '../state/typeReducer'


const HorBarChart = (props) => {
	
    return (
        <HorizontalBar data={props.chart} options={props.options}/>
    );
	
	
}

const mapStateToProps = state => {
	const lables = [];
	const min = [];
	const max = [];
	const avg = [];

	getTypes(state).forEach(type => {
		if (type.selected) {
			lables.push(type.name)
			min.push(type.time.min)
			max.push(type.time.max)
			avg.push(type.time.avg)
			
		}
	})

	const dataProp = {
	    labels: lables,
	    datasets: [{
	    	label: 'Min',
	    	data: min,
	    	backgroundColor: '#444D5F',
	    	stack: '1'
	    },
	    {
	    	label: 'Max',
	    	data: max,
	    	backgroundColor: '#3B71DC',
	    	stack: '1'
	    },
	    {
	    	label: 'Avg',
	    	data: avg,
	    	backgroundColor: '#165F1E',
	    	stack: '1'
	    }],
	};

	const options = {
		options: {
		  scales: {
		    xAxes: [{ stacked: true }],
		    yAxes: [{ stacked: true }]
		  },
		  maintainAspectRatio: false
		}
	}

	return { chart: dataProp, options: options}
}

export default connect(mapStateToProps)(HorBarChart)