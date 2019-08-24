import React from 'react'
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getSelectedMembers } from '../state/memberReducer'


const TableComponent = (props) => {
	 const renderHead = () => {
	 	const titles = (props.contacts ? props.data[0].contact : props.data[0].donors.list[0])
		return (
			<thead>
				<tr>
					{
					Object.keys(titles).map(title => {
						return <th key={title}>{title}</th>	
					})
					}
				</tr>
			</thead>
		)
	}

	const renderBody = () => {

		if (props.contacts) {
			return (
				<tbody>
				{
				props.data.map(member => {
					if (member.selected) {
						return (
							<tr>
								<td>{member.name}</td>
								<td>
									<a href={'http://'+member.contact.Website} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon="globe"/>
									</a>
								</td>
								<td>
									<a href={'malto:'+member.contact.Email} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon="envelope"/>
									</a>
								</td>
								<td>
									{member.contact.Phone}
								</td>
								<td>
									<a href={'http://'+member.contact.News} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon="newspaper"/>
									</a>
								</td>
								<td>
									<a href={'http://'+member.contact.Twitter} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon={['fab', 'twitter']} />
									</a>
								</td>
								<td>
									<a href={'http://'+member.contact.Facebook} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon={['fab', 'facebook']} />
									</a>
								</td>
								<td>
									{member.contact.Liaison}
								</td>
								<td>
									{member.contact['Liaison Phone']}
								</td>
								<td>
									<a href={'malto:'+member.contact['Liaison Email']} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon="envelope"/>
									</a>
								</td>
								<td>
									<a href={'malto:'+member.contact['Personal Email']} 
										target="_blank" 
										rel="noopener noreferrer">
										<FontAwesomeIcon icon="envelope"/>
									</a>
								</td>
							</tr>
						)
					}
				})
				}
			</tbody>
			)
		}
		else {
			return (
				<tbody>
					{
					props.data.map(member => {
						return member.donors.list.map(item => {
							return (
								<tr>							
								{Object.values(item).map(val => <td>{val}</td>)}
								</tr>
							)

						})
					})
					}

				</tbody>
			)
		}
	}

	return (
		<Table striped responsive>
			{renderHead()}
			{renderBody()}
			

		</Table>
		)
}

const mapStateToProps = (state) => {
	return {data: getSelectedMembers(state)}
}

export default connect(mapStateToProps)(TableComponent)
		// <FontAwesomeIcon icon="globe" />
		// <FontAwesomeIcon style={{marginRight: '10px'}} size="2x" icon={['fab', 'facebook']} />