import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const teal = {color: '#007bff', fontWeight: 700}
const Header = () => (
	<Navbar bg="light" variant="light" className="border-bottom">
	    <Navbar.Brand href="/">
	    	<img
	    		src="//d3ju1gh2kf3yfd.cloudfront.net/img/ER_01_Logo.jpg"
	    		style={{height: '50px'}}
	    		alt="Coda Compliance Logo"/>
	    	CODA entitle®
	    </Navbar.Brand>
	    <Nav className="ml-auto d-none d-sm-flex">
	    	<Nav.Link href="#" style={teal}>My Reports</Nav.Link>
	    	<Nav.Link href="#" style={teal}>My Projects</Nav.Link>
	    	<Nav.Link href="#">Hi, Rick</Nav.Link>
    		<Nav.Link href="#"><FontAwesomeIcon icon="user" /></Nav.Link>
    		<Nav.Link href="#"><FontAwesomeIcon icon="border-all" /></Nav.Link>

	    </Nav>
	</Navbar>
)

export default Header