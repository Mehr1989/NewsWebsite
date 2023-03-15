
import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import styles from '@/styles/Home.module.css'

export const getStaticProps = async () => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts"
    const request = await fetch(API_URL)
    const posts = await request.json()
    return  { props : { posts } }
  }
  
  //route 
  export default function Review({ posts }) {
    return (
      <>
      <Container  className='mt-5'>
        <Row>
         
              {posts.slice(2,7).map(post => (
            <Col className={styles.post} lg={12} key={post.id}>

           <h4>{post.title}</h4>
           <p>{post.body}</p>
            </Col>
          
          ))}   
        </Row>
      </Container>
     
       
      
      </> 
    )
  }