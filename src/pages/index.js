import React from "react"
import Helmet from "react-helmet"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBorderAll, faGlobe, faEnvelope, faPhone, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import Container from 'react-bootstrap/Container'
import Landing from '../components/Landing'
import Header from '../components/Header'


library.add(faUser, faBorderAll, faGlobe, faEnvelope, faPhone, faNewspaper, faTwitter, faFacebook)



const IndexPage = () => (  
<React.Fragment>
  <Helmet>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </Helmet>
  <Header />
  <Container fluid={true} 
    style={{padding: 0, marginTop: '-50px'}}>
    <iframe
      style={{height: '105vh', width: '100vw'}} 
      src='https://www.google.com/maps/d/u/0/embed?mid=1g8eP43S6HU4dh-EzzF5kMRB8nYX6eVTo&z=4'
    />
    <Landing />
  </Container>
  

  </React.Fragment>
)

export default IndexPage
