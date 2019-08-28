import React from 'react'
import Helmet from "react-helmet"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import MemberImages from '../components/MemberImages'
import Header from '../components/Header'
import Controls from '../components/Controls'
import DoughnutChart from '../components/DoughnutChart'
import DonorBarChart from '../components/BarChart'
import TableComponent from '../components/TableComponent'
import Map from '../components/Map'


const PeoplePage = () => (
	<React.Fragment>
	  <Helmet>
	  	<meta charSet="utf-8" />
    	<title>CODA entitle®</title>
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
						<h4>Region <span className="float-right font-small pt-2">USA > CA > SANTA CLARA > SAN JOSE</span></h4>
						<Map 
							googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAClnmEcTQ58HoCoE-5XjRgz32HxLJbTlE&v=3.exp&libraries=geometry,drawing,places`}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `600px`, width: `100%` }} />}
							mapElement={<div style={{ height: `95%` }} />}
						/>
					</Col>
					<Col md={7} className="border">
						<h4>Vote History (All developments)</h4>
						<MemberImages />
					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col md={4} className="border">
						<h4>Contributions to Politician (CA Forms 460 & 497)</h4>
						<DoughnutChart />
					</Col>
					<Col md={4} className="border">
						<h4>Council Donors by Type (CA Forms 460 & 497)</h4>
						<p className="font-small">Data available on city <a target="_blank" rel="noopener noreferrer" href="https://www.southtechhosting.com/SanJoseCity/CampaignDocsWebRetrieval/Search/SearchByFilerName.aspx" >
							public portal.</a>
						</p>
						<DonorBarChart />
					</Col>
					<Col md={4} className="border">
						<h4>Conflicts by Politician (CA Form 700)</h4>
						<DoughnutChart conflicts/>
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


export default PeoplePage

