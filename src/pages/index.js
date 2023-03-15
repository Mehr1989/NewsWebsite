import Head from 'next/head'
import { Button, Container,Col,Row,Navbar,Nav} from 'react-bootstrap';
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '@/component/main/Main';

import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="News" content="A news Website" />
      </Head>
  
      <Container className='mt-5 ' >
        <Row>
          <Col md={6}  className={styles.heroOne}>
            <div>
              <Button variant='danger'>Read More</Button>
            <h3>Boost Your Security in Search Engines</h3>
          
             <h5  >By Marshall 12 April 2022</h5>

            </div>
         
          </Col>
          <Col md={6}>
            <Row>
            <Col md={12}   className={styles.heroTwo}>
              <div>
                <Button variant='success'>read More</Button>
                <h3>Healthy Diet Tips for Your Daily Life</h3>
                <h5>By Diana 12 June 2020</h5>

              </div>
              
            </Col>
            

            </Row>
           
           <Row>
            <Col md={6}  className={styles.heroThree}>
              <div>
                <Button variant='info'>Read More</Button>
                <h5>Tips for Quicj and Easy Modern Fashio Style</h5>
                <h7>By Samantha 23 August 2022</h7>

              </div>


            </Col>
            <Col md={6}  className={styles.heroFour}>
              <div>
                <Button variant='secondary'>Read More</Button>
                <h5>How Technology Improve Your Timing</h5>
                <h7>By Jack 14 April 2021 </h7>
              </div>
            </Col>
          </Row>
          </Col> 
        </Row>
      
      </Container>
      <section style={{marginTop:'4%'}} >
      
       
        <Main/>

   
        
      </section>
     



        
       



    </>
  )
}
