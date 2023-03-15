import React from 'react'

import { Button, Container,Col,Row,Navbar,Nav} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from '@/styles/Home.module.css'


function Layout({children}) {
  return (
    <>
          <section >
    <div  className={styles.logoBox}> 
    <Container fluid > 
      <Row>
      
        <Col lg={6} sm={12} md={12} >
      
      <img style={{width:"40%",height:'7vh'}}
          src="/image/logo.png"
          alt="React Bootstrap logo"
        />
    </Col>
    <Col lg={6} sm={12} md={12} >
    
      <img className={styles.adImg} style={{float:"right",width:"50%",height:'7vh'}}
          src="/image/headerb.png"
          alt="React Bootstrap logo"   
        />

    </Col>
 
      </Row>
         
        </Container>
    </div>         
      </section>
      <section className={styles.navbar} >
        

  <Nav defaultActiveKey="/home" as="ul" className='bg-dark mt-2  '    >
      <Nav.Item as="li" className={styles.navLi}>
        <Nav.Link href="/" className={styles.text}   >
        
          Home</Nav.Link>
      </Nav.Item >
      <Nav.Item as="li" className={styles.navLi}>
        <Nav.Link href="/review" className={styles.text} >Reveiws</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className={styles.navLi}>
        <Nav.Link href='/culture' className={styles.text}    >Culture</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className={styles.navLi} >
        <Nav.Link href="/politics" className={styles.text}  >Politics</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className={styles.navLi}>
        <Nav.Link eventKey="link-2" className={styles.text}  >Memes</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className={styles.navLi}>
        <Nav.Link eventKey="link-2" className={styles.text} >Sports</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" className={styles.navLi}>
        <Nav.Link eventKey="link-2" className={styles.text} >Boxed</Nav.Link>
      </Nav.Item>
     
    </Nav>
      

      </section>
  
      
      {children}
    </>
   
  )
}

export default Layout
