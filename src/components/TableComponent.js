import React from 'react'
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBDataTable } from 'mdbreact';


import { getMembers } from '../state/memberReducer'


const TableComponent = (props) => {

	const buildColumns = () => {
	 	const columns = [];
	 	const titles = (props.contacts ? props.data[0].contact : props.data[0].donors.list[0])

	 	Object.keys(titles).map(title =>{
			return columns.push({
        		label: title,
        		field: title,
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
					href={"http://"+link} 
					target="_blank" 
					rel="noopener noreferrer">
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
			props.data.forEach(member => {

				if ( member.selected) {
					let row = {}
					const contact = member.contact
					Object.keys(contact).forEach(val =>{

						if (needIcon.includes(val)) {
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
			props.data.forEach(member => {
				if (member.selected) {
					 member.donors.list.forEach(item => {
						rows.push(item)
						
					})
				}

			})
		}
		// console.log(rows)
		return rows
	}

	const data = {columns: buildColumns(), rows: buildRows()}
	// console.log(data)
	return (
	
		<MDBDataTable
		  data={data}
		  striped
		  border
		  hover
		  responsive
		/>
	)
}

const mapStateToProps = (state) => {
	console.log(getMembers(state))
	return {data: getMembers(state)}
}

export default connect(mapStateToProps)(TableComponent)

	
		// <FontAwesomeIcon icon="globe" />
		// <FontAwesomeIcon style={{marginRight: '10px'}} size="2x" icon={['fab', 'facebook']} />


		//head
		// const titles = (props.contacts ? props.data[0].contact : props.data[0].donors.list[0])
		// return (
		// 	<thead>
		// 		<tr>
		// 			{
		// 			Object.keys(titles).map(title => {
		// 				return <th key={title}>{title}</th>	
		// 			})
		// 			}
		// 		</tr>
		// 	</thead>
		// )


		//body
		// if (props.contacts) {
		// 	return (
		// 		<tbody>
		// 		{
		// 		props.data.map(member => {
		// 			if (member.selected) {
		// 				return (
		// 					<tr key={member.name}>
		// 						<td>{member.name}</td>
		// 						<td>
		// 							<a href={'http://'+member.contact.Website} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon="globe"/>
		// 							</a>
		// 						</td>
		// 						<td>
		// 							<a href={'malto:'+member.contact.Email} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon="envelope"/>
		// 							</a>
		// 						</td>
		// 						<td>
		// 							{member.contact.Phone}
		// 						</td>
		// 						<td>
		// 							<a href={'http://'+member.contact.News} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon="newspaper"/>
		// 							</a>
		// 						</td>
		// 						<td>
		// 							<a href={'http://'+member.contact.Twitter} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon={['fab', 'twitter']} />
		// 							</a>
		// 						</td>
		// 						<td>
		// 							<a href={'http://'+member.contact.Facebook} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon={['fab', 'facebook']} />
		// 							</a>
		// 						</td>
		// 						<td>
		// 							{member.contact.Liaison}
		// 						</td>
		// 						<td>
		// 							{member.contact['Liaison Phone']}
		// 						</td>
		// 						<td>
		// 							<a href={'malto:'+member.contact['Liaison Email']} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon="envelope"/>
		// 							</a>
		// 						</td>
		// 						<td>
		// 							<a href={'malto:'+member.contact['Personal Email']} 
		// 								target="_blank" 
		// 								rel="noopener noreferrer">
		// 								<FontAwesomeIcon icon="envelope"/>
		// 							</a>
		// 						</td>
		// 					</tr>
		// 				)
		// 			}
		// 		})
		// 		}
		// 	</tbody>
		// 	)
		// }
		// else {
		// 	return (
		// 		<tbody>
		// 			{
		// 			props.data.map(member => {
		// 				return member.donors.list.map(item => {
		// 					return (
		// 						<tr key={item.ID}>							
		// 						{Object.values(item).map((val, i) => <td key={i}>{val}</td>)}
		// 						</tr>
		// 					)

		// 				})
		// 			})
		// 			}

		// 		</tbody>
		// 	)
		// }