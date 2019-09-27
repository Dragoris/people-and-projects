import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import Image from './image'
import { connect } from 'react-redux';
import { getMembers } from '../state/memberReducer'


const MemberImages = (props) => {
	console.log(props)
	const banner = {
		fontSize: '.8em',
	    textAlign: 'center',
	    position: 'absolute',
	    bottom: '30%',
	    width: '100%',
	    color: '#fff',
	    backgroundColor: '#007bff',
	    fontWeight: 'bold'
	}
	return (
		<div className="d-flex flex-wrap">
			{

			props.members.map(member => {
				if (member.selected) {
					const name = member.member
					return (
						<OverlayTrigger
							style={{width: '800px'}}
					  		key={name}
				      		overlay={
		        			<Tooltip
		        				className="show"
		        				id={`tooltip-${name}`}
		        			>
		        				<div >
			          				<strong>Committees</strong>
			          				<br/>
			          				{member.committees
			          				?
			          				member.committees
			          				:
			          				'No Committees Listed'
			          				}
			          			</div>

		       				</Tooltip>
		      				}
						>
							<div key={name} 
								style={{width: '150px'}} 
								className="d-flex flex-column m-2 position-relative">
								<Image 
									filename={name + '.jpg'}
									styleprop={{width: '150px', height: '100%', margin: 'auto'}}
								>
								
								</Image>
								{(member.term < 730 
									? (<div style={banner}>TERM ENDING <br/> {member.termEnd}</div>)
									: null
								)}
								<div className="d-flex flex-row">
									<div className="bg-success text-white w-100 text-center">
										{member.voteY}
									</div>
									<div className="bg-warning text-white w-100 text-center">
										{member.voteA}
									</div>
									<div className="bg-danger text-white w-100 text-center">
										{member.voteN}
									</div>

								</div>
								<div className="d-flex flex-column" style={{fontSize: '.9em'}}>
									<strong>{member.name}</strong>
									{member.district}
								</div>

							</div>
						</OverlayTrigger>
					)
				}
				else {
					return null
				}
			})
			}
		</div>

	)
}

const mapStateToProps = (state) => {
	return {members: getMembers(state)}
}
export default connect(mapStateToProps)(MemberImages)