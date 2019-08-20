import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import { members } from '../apis/council-members'


const Controls = () => (
	<Container fluid='true'>
		<Form className="p-3 m-3 border">
			<Row>
				<Col sm={2}><h4>Dataset</h4></Col>
				<Col sm={10}><h4>Council Members</h4></Col>
			</Row>
			<Row key={`custom-inline-checkbox`} >
				<Col sm={2}>
					<BootstrapSwitchButton
					    checked={false}
					    onlabel='People'
					    offlabel='Permits'
					    width={100}
					    onstyle="outline-primary"
					    offstyle="outline-primary"
					    
					/>
				</Col>
				<Col sm={10}>
					{
					members.map((member, i) => {
						return (
						      <Form.Check
						        custom
						        inline
						        label={member.CName +', ' +member.DISTRICT}
						        key={member.DistrictNum}
						        type='checkbox'
						        id={`custom-inline-checkbox-${member.DistrictNum}`}
						        style={{width: '13%', fontSize: '.8em'}}
						      />
						)
					})
					}
				</Col>
			</Row>
		</Form>
	</Container>
)

export default Controls