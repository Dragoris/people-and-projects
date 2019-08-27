import React from 'react'
import Helmet from "react-helmet"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux';

import MemberImages from '../components/MemberImages'
import Header from '../components/Header'
import Controls from '../components/Controls'
import Image from '../components/Image'
import DoughnutChart from '../components/DoughnutChart'
import DonorBarChart from '../components/BarChart'
import TableComponent from '../components/TableComponent'


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
						<h4>Conflicts</h4>
						<DoughnutChart conflicts/>
					</Col>
					<Col md={7} className="border">
						<h4>Vote History</h4>
						<MemberImages />
					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col md={5} className="border">
						<h4>Total Donations</h4>
						<DoughnutChart />
					</Col>
					<Col md={7} className="border">
						<h4>Council Donor by Type</h4>
						<DonorBarChart />
					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col md={12} className="border">
						<h4>Contacts</h4>
						<TableComponent contacts/>

					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col md={12} className="border">
						<h4>Donor List</h4>
						<TableComponent />
					</Col>
				</Row>

			</Container>
		</Container>
	</React.Fragment>
)

const mapStateToProps = (state) => {
	return {members: state}
}

export default PeoplePage

