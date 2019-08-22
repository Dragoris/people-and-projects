import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';


const colors = [
	'rgb(60,180,75)',
	'rgb(0,0,128)',
	'rgb(230,25,75)',
	'rgb(245,130,48)',
	'rgb(100,151,177)',
	'rgb(170,255,195)',
	'rgb(230,190,255)',
	'rgb(128,128,128)',
	'rgb(128,0,0)',
	'rgb(255,225,25)',
	'rgb(0,130,200)',
]



const DoughnutChart = (props, i) => {
	const lables = [];
	const data = [];
	const backgroundColor = [];

	props.members.forEach((member, i) => {
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

	return (
		<div>
			<Doughnut
				data={dataProp}
				key={i}/>
		</div>
	)
}



const mapStateToProps = (state) => {
	return {members: state.memberReducer}
}

export default connect(mapStateToProps)(DoughnutChart)