import React from 'react'
import { Link } from 'react-bootstrap-icons'
import {ImFacebook,ImTwitter}  from "react-icons/im"
import {SiPinterest} from "react-icons/si"
import {BsInstagram} from 'react-icons/Bs'
import {FaYoutube} from 'react-icons/Fa'



function SideBar() {
  return (
    <>
    <div style={{display:"flex",backgroundColor:'#366abf',marginBottom:'3%',alignItems:'center'}}>
       
  < ImFacebook style={{width:"25px",height:'25px',color:"white",marginLeft:'3%'}} />
        
         
       <h4 style={{paddingLeft:"10%",fontWeight:'500',color:"aliceblue"}}>12740 Likes</h4>
        
    </div>

    <div style={{display:"flex",backgroundColor:'#bf250d',marginBottom:'3%',alignItems:'center'}}>
       
     <SiPinterest   style={{width:"25px",height:'25px',color:"white",marginLeft:'3%'}}/>
       
       
       <h4 style={{paddingLeft:"10%",fontWeight:'500',color:"aliceblue"}}>5600 Likes</h4>
        
    </div>

    <div style={{display:"flex",backgroundColor:'#6fb9e3',marginBottom:'3%',alignItems:'center'}}>
       
    < ImTwitter style={{width:"25px",height:'25px',color:"white",marginLeft:'3%'}}/>
      
       
       <h4 style={{paddingLeft:"10%",fontWeight:'500',color:"aliceblue"}}>  14540 Likes</h4>
        
    </div>

    <div style={{display:"flex",backgroundColor:'#cd68d9',marginBottom:'3%',alignItems:'center'}}>
       
    < BsInstagram style={{width:"25px",height:'25px',color:"white",marginLeft:'3%'}}/>
       
       <h4 style={{paddingLeft:"10%",fontWeight:'500',color:"aliceblue"}}>14797 Likes</h4>
        
    </div>

    <div style={{display:"flex",backgroundColor:'#db2326',marginBottom:'3%',alignItems:'center'}}>
       
    < FaYoutube style={{width:"25px",height:'25px',color:"white",marginLeft:'3%'}}/>
       
       <h4 style={{paddingLeft:"10%",fontWeight:'500',color:"aliceblue"}}>12246 Likes</h4>
        
    </div>
    
    
      
    </>
  )
}

export default SideBar
