import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { members } from '../apis/council-members'
import { permitsKeyed } from '../apis/permitsKeyed'
import { toggleMember } from '../state/actions'
import { togglePage } from '../state/actions'
import { toggleType } from '../state/actions'


const Controls = (props) => {
	console.log(props)
	return (
		<Container
			fluid='true'
			className="p-3 border-bottom border-dark position-sticky bg-white"
			style={{zIndex: 100, top: 0, maxHeight: '160px', overflowY: 'scroll'}}
		>
			<Form>
				<label style={{float: 'left'}}>
					<strong>People </strong>
		        	<Switch
		        		onChange={() => props.togglePage()}
		        		checked={props.checked}
		        		uncheckedIcon={<FontAwesomeIcon icon="users" style={{width: '100%',}}/>}
		        		checkedIcon={<FontAwesomeIcon icon="building" style={{width: '100%',}}/>}
		        		offColor="#007bff"

		        	/>
		        	<strong> Permits</strong>
		    	</label>
		    	{
		    		props.checked ?
		    		<React.Fragment>
			    		<Row>
							<Col sm={12}><h4>Planning Application Type</h4></Col>
						</Row>
						<Row key={`custom-inline-checkbox`} >
							<Col sm={12}>
							{
								props.types.map((permit, i) => {
									const name = permit.name
									return (
									    <Form.Check
									      	defaultChecked={true}
									        custom
									        inline
									        label={name}
									        key={name}
									        type='checkbox'
									        id={`custom-inline-checkbox-${name}`}
									        style={{width: '13%', fontSize: '.8em', whiteSpace: 'pre-wrap'}}
									        onClick={() => props.toggleType(name)}
									    />
									)
								})
							}
							</Col>
						</Row>
					</React.Fragment>

					:
					<React.Fragment>
						<Row>
							<Col sm={12}><h4>San Jose Council Members</h4></Col>
						</Row>
						<Row key={`custom-inline-checkbox`} >
							<Col sm={12}>
								{
								props.members.map((member, i) => {
									const label = `${member.name} \n${member.district}`
									return (
									    <Form.Check
									      	defaultChecked={true}
									        custom
									        inline
									        label={label}
									        key={member.district}
									        type='checkbox'
									        id={`custom-inline-checkbox-${member.district}`}
									        style={{width: '13%', fontSize: '.8em', whiteSpace: 'pre-wrap'}}
									        onClick={() => props.toggleMember(member.member)}
									    />
									)
								})
								}
							</Col>
						</Row>
					</React.Fragment>
		    	}

				
			</Form>
		</Container>
	)
}

const mapDispatchToProps = (dispatch, member) => {
	return {
		toggleMember: (member) => {
			dispatch(toggleMember(member))
		},
		togglePage: () => {
			dispatch(togglePage())
		},
		toggleType: (type) => {
			dispatch(toggleType(type))
		}
	}
};

const mapStateToProps = (state) => {
	return {
		checked: state.pageReducer,
		members: state.memberReducer,
		types: state.typeReducer
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Controls)