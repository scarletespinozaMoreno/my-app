import React from 'react'
 
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <footer  className="bg-light text-dark-50">
         
                <div className="col-md-2 col-20 mx-auto ">
                  
                        <small className="row justify-content-md-center">Copyright &copy; Service - Soft Developer</small>
                        
              
                        <div className="row justify-content-md-center col-md  ">
                                <div className="col-md-2 col-6  my-2" >
                       
                                <SocialIcon url="https://www.facebook.com/riosymontanas.ec" />
                                </div>   
                                <div className="col-md-2 col-6   my-2" >
                                <SocialIcon url="https://www.instagram.com/riosymontanas.ec/"/>
                                </div>
                                <div className="col-md-2 col-6   my-2" >
                                <SocialIcon url="https://www.youtube.com/watch?v=sh_cEPAiKns"/>
                                </div>
                        
                        </div>
                </div>
                
             
        </footer>
    )
}
export default Footer