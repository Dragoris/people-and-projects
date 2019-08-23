import React from "react"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from "gatsby"


import UseButtons from './UseButtons'



const containerStyle = {
	position: 'absolute',
	top: '0',
	display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
}

const title = {
	fontWeight: 700,
	textAlign: 'center'
}

const Landing = () => (
	<div style={containerStyle}>
		<div>
			<h1 style={title}> Find Your Entitlement Risk</h1>
			<UseButtons />
			<Form className="pt-2">
			  <Form.Group as={Row} controlId="search">
			  	<Col sm={10}>
			    	<Form.Control  placeholder="Enter City Here" />
			    </Col>
			    <Col sm={2}>
			    	<Button className="w-100">
			    		<Link style={{color: '#fff', textDecoration: 'none'}} to="/people">Search</Link>
			    	</Button>
			    </Col>
			  </Form.Group>
			</Form>
		</div>
	</div>
)

export default Landing