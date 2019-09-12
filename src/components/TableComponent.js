import React from 'react'
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

import { getMembers } from '../state/memberReducer'
import { getTypes } from '../state/typeReducer'


const TableComponent = (props) => {
	const buildColumns = () => {
	 	const columns = [];
	 	let titles;

	 	if (props.contacts) {
	 		titles = props.members[0].contact
	 	}
	 	else if (props.donors) {
	 		titles = props.members[0].donors.list[0]
	 	}
	 	else if (props.permits) {
	 		titles = props.types[0].list[0]
	 	}

	 	Object.keys(titles).map(title =>{
			return columns.push({
        		label: title,
        		field: title,
        		width: 150
      		})
		})

		return columns
	

	}

	const buildRows = () => {
		const rows = [];
		if (props.contacts) {
			const needIcon = ['Website', 'Email', 'News', 'Twitter', 'Facebook', 'Liaison Email', 'Personal Email']
			const getIcon = (icon, link, key) => {
				return (
					[<a 
					className="blue-text"
					href={link} 
					target="_blank" 
					rel="noopener noreferrer"
					key={key}>
					<i key={key} className={icon} aria-hidden="true" /></a>]
				)
			}
			const iconMap = {
				Website: 'fa fa-globe',
				Email:  'fa fa-envelope',
				'Personal Email':  'fa fa-envelope',
				'Liaison Email': 'fa fa-envelope',
				News: 'fa fa-newspaper',
				Twitter: 'fab fa-twitter',
				Facebook: 'fab fa-facebook',
			}
			props.members.forEach(member => {

				if (member.selected) {
					let row = {}
					const contact = member.contact
					Object.keys(contact).forEach(val =>{

						if (needIcon.includes(val) && contact[val] !== "") {
							row[val] = getIcon(iconMap[val], contact[val], val)
						}
						else {
							row[val] = contact[val]
						}
					})

				rows.push(row)
				}
			})
		}
		else {
			if (props.donors) {
				props.members.forEach(member => {
					if (member.selected) {
						 member.donors.list.forEach(item => {
							rows.push(item)
							
						})
					}
				})
			}
			else if (props.permits) {
				props.types.forEach(type => {
					if (type.selected) {
						 type.list.forEach(item => {
							rows.push(item)
							
						})
					}
				})
			}
		}
		return rows
	}

	const data = {columns: buildColumns(), rows: buildRows()}
	return (
	
		<MDBDataTable
		  data={data}
		  striped
		  bordered
		  hover
		  responsiveLg
		  scrollY
		  scrollX
		  entries={15}
		  maxHeight="550px"
		/>
	)
}

const mapStateToProps = (state) => {
	return {members: getMembers(state), types: getTypes(state)}
}

export default connect(mapStateToProps)(TableComponent)

	
		