import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';

import { members } from '../apis/council-members'
import { toggleMember } from '../state/actions'


const Controls = (props) => {
	return (
		<Container
			fluid='true'
			className="p-3 border position-sticky bg-white"
			style={{zIndex: 1, top: 0}}
		>
			<Form>
				<Row>
					<Col sm={12}><h4>Council Members</h4></Col>
				</Row>
				<Row key={`custom-inline-checkbox`} >
		
					<Col sm={12}>
						{
						members.map((member, i) => {
							return (
							    <Form.Check
							      	defaultChecked={true}
							        custom
							        inline
							        label={member.CName +', ' +member.DISTRICT}
							        key={member.DistrictNum}
							        type='checkbox'
							        id={`custom-inline-checkbox-${member.DistrictNum}`}
							        style={{width: '13%', fontSize: '.8em'}}
							        onClick={() => props.toggle(member.LName)}
							    />
							)
						})
						}
					</Col>
				</Row>
			</Form>
		</Container>
		)
}

const mapDispatchToProps = (dispatch, member) => {
	return {
		toggle: (member) => {
			dispatch(toggleMember(member))
		}
	}
};



export default connect(null, mapDispatchToProps)(Controls)