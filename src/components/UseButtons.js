import React from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



const data = [
	{
		name: 'Multi-Family',
		text: 'High or mid-rise, garden style, walk-up, manufactured, or special purpose class A, B or C residential uses.'
	},
	{
		name: 'Office',
		text: 'Class A, B or C urban or suburban office or medical uses'
	},
	{
		name: 'Retail',
		text: 'Regional, community, strip, power, big-box retail or restaurant mall/center uses.'
	},
	{
		name: 'Mixed-Use',
		text:  'Blend of residential, commercial, cultural, institutional or entertainment uses.' 
	},
	{
		name: 'Industrial',
		text:  'Heavy, light, bluk or flex industrial parks or individual industrial building uses.' 
	},
	{
		name: 'Hotel',
		text:  'Limited or full-service, boutique, casino, extended-stay or resort uses.' 
	},
	{
		name: 'Special Purpose',
		text:  'Commercial uses, such as amusement parks, churches, self-storage, etc.' 
	},
	{
		name: 'Land',
		text:  'Undeveloped property. Infill land within an urban area, or raw land in a rural area.' 
	},
]

const buttons = [];

data.forEach(use => {
	const popover = (
	  <Popover id="popover-basic">
	    <Popover.Title as="h3">{use.name}</Popover.Title>
	    <Popover.Content>
	      {use.text}
	    </Popover.Content>
	  </Popover>
	);

	
	 buttons.push(
		<OverlayTrigger trigger="click" placement="top" key={use.name}overlay={popover}>
	    	<Button variant="secondary">{use.name}</Button>
		</OverlayTrigger>
	)
	
})
const UseButtons = () => {
	return(
		<ButtonGroup>
			{buttons}
		</ButtonGroup>
	)

}

export default UseButtons