import React from 'react'
import Helmet from "react-helmet"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Header from '../components/Header'
import Controls from '../components/Controls'
import Image from '../components/Image'


const PeoplePage = () => (  
	<React.Fragment>
	  <Helmet>
	    <link
	      rel="stylesheet"
	      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	      crossorigin="anonymous"
	    />
	  </Helmet>
	    <Container fluid={true} className="p-0">
			<Header />
			<Controls />
			<Container fluid={true} className="p-0">
				<Row className="p-3 m-3">
					<Col md={5} className="border">
						<h4>Region</h4>
						<Image filename="SJDistricts.png" />
					</Col>
					<Col md={7} className="border">
						<h4>Vote History</h4>
						people
					</Col>
				</Row>
			</Container>
		</Container>
	</React.Fragment>
)

export default PeoplePage