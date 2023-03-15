import React from 'react'
import { Nav,Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Home.module.css'
function Footer() {
  return (
    <>
    <Container fluid style={{backgroundColor:"black"}}>
        <Row>
            <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  href="/home">Active rryh ryry</Nav.Link>
      <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}   eventKey="link-1">Link rrhyt ryr</Nav.Link>
      <Nav.Link style={{color:"aliceblue",fontWeight:"700"}}   eventKey="link-2">Link qewrr ett</Nav.Link>
      <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
            </Col>
<Col>

<Nav defaultActiveKey="/home" className="flex-column">
 <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  href="/home">Active eteytr teret</Nav.Link>
 <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  eventKey="link-1">Link etryt eer</Nav.Link>
 <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  eventKey="link-2">Link aqweqed </Nav.Link>
 <Nav.Link   style={{color:"aliceblue",fontWeight:"700"}} eventKey="disabled" disabled>
   Disabled
 </Nav.Link>
</Nav>
</Col>

<Col>

<Nav defaultActiveKey="/home" className="flex-column">
 <Nav.Link style={{color:"aliceblue",fontWeight:"700"}} href="/home">Active etry tyuty</Nav.Link>
 <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  eventKey="link-1">Link etrytrt </Nav.Link>
 <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  eventKey="link-2">Link try ryry</Nav.Link>
 <Nav.Link  style={{color:"aliceblue",fontWeight:"700"}}  eventKey="disabled" disabled>
   Disabled
 </Nav.Link>
</Nav>
</Col>
<div className={styles.footer} style={{}}>
<h5 style={{fontWeight:"700",color:'aliceblue'}}>@All Rights Reserved</h5>

    </div> 

</Row>
 

    </Container>
   
      
    </>
  )
}

export default Footer
