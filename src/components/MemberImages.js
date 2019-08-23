import React from 'react'


import Image from './image'
import { connect } from 'react-redux';
import { getMembers } from '../state/memberReducer'


const MemberImages = (props) => {
	return (
		<div className="d-flex flex-wrap">
			{

			props.members.map(member => {
				if (member.selected) {
					return (
						<div key={member.member} style={{width: '150px'}} className="d-flex flex-column m-2 ">
							<Image 
								filename={member.member + '.jpg'}
								styleprop={{width: '150px', height: '100%', margin: 'auto'}}
							/>
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
					)
				}
			})
			}
		</div>

	)
}

const mapStateToProps = (state) => {
	console.log(getMembers(state))

	return {members: getMembers(state)}
}
export default connect(mapStateToProps)(MemberImages)