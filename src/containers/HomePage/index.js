import React from 'react'
import { Layout } from '../../components/Layout'
import bgVideo from '../../images/bgVideo.mp4'
import "./style.css";
import { Gallery } from '../../components/Gallery/Gallery';
import Services from '../../components/Services';
import{Carouse} from "../../components/Carousel"

/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
  return (
    
    <div className='home'>
      <Layout>
      <video style={{paddingTop:"5px"}} src={bgVideo} autoPlay loop muted />
      <div className='greetungs'>
        <p className='greethead'>
          Welcome to Bin Riaz Leathers
        </p>
        <p>
          Find the perfect handcrafted goods you always seek
        </p>

      </div>
      <h1>how are you</h1>
      <Carouse/>
      
      <Gallery/>
      <Services/>

      </Layout>

    </div>
    
  )

}