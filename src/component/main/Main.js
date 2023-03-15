import React from 'react'
import { Col,Container,Row,Image,Card,Button,Form } from 'react-bootstrap'

import { data,dataSide,Latest } from './data'
import {FaCommentAlt} from 'react-icons/Fa'
import styles from '@/styles/Home.module.css'
import SideBar from './SideBar'
import Footer from '../Footer'





function Main() {
  return (
    <>
    <section>
   

  <Container fluid >
 
      <Row>
      
      <Col lg={9}>
      <h1 className={styles.subject}>Our Popular Subjects</h1>
        <Container fluid>
          <Row>

          
      {data.map((list)=>{
            return (
              <>

      <Col lg={6} className='my-3' >
      <Card  style={{display:"flex",flexDirection:'row'}} className={styles.card} >
        <div style={{width:"50%",height:'26vh'}}>
        <Card.Img variant="top" src={list.source} style={{width:"100%", height:"100%",
      }}  />
        </div>
        <div>

        <Card.Body>
        <Card.Title>{list.title}</Card.Title>
        <Card.Text>{list.date}</Card.Text>

        <Card.Text>
        <FaCommentAlt style={{color:"orangered"}} />
        {list.comment} Commnet
        </Card.Text>

        <Button  variant="dark">Go somewhere</Button>
    
      </Card.Body>
        </div>
     
    </Card>

    </Col>    
              </>
            )
          })}
          </Row>
          </Container>

      <h1 className={styles.subject}>Latest Posts</h1>
      <Container>
        <Row>
          {Latest.map((card)=>{
            return(
              <>
              <Col lg={6}>
              <Card className={styles.latest} >
                <div style={{height:"30vh"}}>

              <Card.Img variant="top" src={card.source} style={{width:"100%" , height:'100%'}} />
                </div>
      
      <Card.Body>
        <Card.Title style={{fontWeight:'800'}}>{card.title}</Card.Title>
        <Card.Text style={{fontWeight:'600'}}>
          By {card.author}
        </Card.Text>
        <Button  variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
              </Col>

              </>
            )
          })}
      
        </Row>
      </Container>
      </Col>
      
        <Col lg={3} >
         <h3 className={styles.side} >Stay Connected</h3>
         <SideBar  />
         <h3 className={styles.side} style={{marginTop:'3vh'}} >Subscribe</h3>
         <section>
          <div className={styles.form}>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h5>Subscribe to Our New Stories</h5>
        <Form.Control type="email" placeholder=" Email Address" style={{border:'2px solid black'}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <div style={{display:"flex",justifyContent:'center'}}>
      <Button variant="danger" type="submit" style={{width:"80%"}}>
        Submit
      </Button>

      </div>
      
    </Form>

          </div>
 

    </section>
    <section>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Card style={{ width: '18rem'}} className='mt-5'>
      <Card.Img variant="top" src="/image/pop11.jpg" style={{height:'30vh'}} />

    <Card.Img variant="top" src="/image/logo.png" />
    </Card>

      </div>
  
    </section>
    <section>

 <h3 className={styles.side} style={{marginTop:'5vh'}} >TikTok</h3>
    </section>

    <section >
  


      

      
      {dataSide.map((lists) =>{
        return (
          <>
         
               <Card className={styles.cardSide} style={{}} >
      <Card.Img variant="top" src={lists.source} />
      <Card.Body>
        <h10 style={{fontWeight:"700"}}>{lists.title}</h10>
        <Card.Text style={{fontWeight:"600"}}>{lists.time}</Card.Text>
        
      </Card.Body>
    </Card>
    
          </>
        )
      })}
    
  

    </section>
     
        </Col>
      </Row>
    </Container>
    <Footer />
        
    </section>

  

    </>
  )
}

export default Main
