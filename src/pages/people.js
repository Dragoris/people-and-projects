import React from 'react'
import Helmet from "react-helmet"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux';

import MemberImages from '../components/MemberImages'
import Header from '../components/Header'
import Controls from '../components/Controls'
import DoughnutChart from '../components/DoughnutChart'
import DonorBarChart from '../components/BarChart'
import TableComponent from '../components/TableComponent'
import HorBarChart from '../components/HorBarChart'
import PieChart from '../components/PieChart'
import Map from '../components/Map'


const PeoplePage = (props) => (
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
			{
			props.checked
			?
			<Container fluid={true} className="p-0">
				<Row className="p-3 m-3">
					
					<Col md={5} className="border">
						<Row>
							<Col xs={4}>
								<h4>Region</h4>
							</Col>
							<Col xs={8}>
								<div className="float-right font-small pt-2">USA > CA > SANTA CLARA > SAN JOSE</div>
							</Col>
						</Row>
						<Map 
							googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAClnmEcTQ58HoCoE-5XjRgz32HxLJbTlE&v=3.exp&libraries=geometry,drawing,places`}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `600px`, width: `100%` }} />}
							mapElement={<div style={{ height: `95%` }} />}
						/>
					</Col>
					<Col md={7} className="border">
						<h4>Status Mix</h4>
						<PieChart />	
					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col sm={12} className="border">
						<h4>Time Per Planning Process <span className="font-small">(days)</span></h4>
						<HorBarChart />
					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col sm={12} className="border">
						<h4>Permit List</h4>
						<TableComponent permits/>
					</Col>
				</Row>
			</Container>
			:
			<Container fluid={true} className="p-0">
				<Row className="p-3 m-3">
					
					<Col md={5} className="border">
						<Row>
							<Col xs={4}>
								<h4>Region</h4>
							</Col>
							<Col xs={8}>
								<div className="float-right font-small pt-2">USA > CA > SANTA CLARA > SAN JOSE</div>
							</Col>
						</Row>
						<Map 
							googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAClnmEcTQ58HoCoE-5XjRgz32HxLJbTlE&v=3.exp&libraries=geometry,drawing,places`}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `600px`, width: `100%` }} />}
							mapElement={<div style={{ height: `95%` }} />}
						/>
					</Col>
					<Col md={7} className="border">
						<h4>Vote History <span className="font-small">(All developments)</span></h4>
						<MemberImages />
					</Col>
				</Row>
				<Row className="p-3 m-3">
					<Col md={12} className="border">
						<h4>Council Donors by Type <span className="font-small"><br/>(CA Forms 460 & 497)</span></h4>
						<p className="font-small">Source: <a target="_blank" rel="noopener noreferrer" href="https://www.southtechhosting.com/SanJoseCity/CampaignDocsWebRetrieval/Search/SearchByFilerName.aspx" >
							 Campaign Docs.</a>
						</p>
						<DonorBarChart />
					</Col>
				</Row>

				<Row className="p-3 m-3">
					<Col md={6} className="border">
						<h4>Contributions to Politician <span className="font-small"><br/>(CA Forms 460 & 497)</span></h4>
						<p className="font-small">Source: <a target="_blank" rel="noopener noreferrer" href="https://www.southtechhosting.com/SanJoseCity/CampaignDocsWebRetrieval/Search/SearchByFilerName.aspx" >
							 Campaign Docs.</a>
						</p>
						<DoughnutChart members/>
					</Col>
					<Col md={6} className="border">
						<h4>Conflicts by Politician <span className="font-small"><br/>(CA Form 700)</span></h4>
						<p className="font-small">Source: <a target="_blank" rel="noopener noreferrer" href="http://www.fppc.ca.gov/transparency/form-700-filed-by-public-officials/form700-search.html" >
							 Campaign Docs.</a>
						</p>
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
						<TableComponent donors/>
					</Col>
				</Row>

			</Container>
			}
		</Container>
	</React.Fragment>
)

const mapStateToProps = (state) => {
	return {checked: state.pageReducer}
}
export default connect(mapStateToProps, null)(PeoplePage)

