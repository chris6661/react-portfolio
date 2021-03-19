import React from 'react'
import netflix from '../images/netflix.png'; 
import galaxy1 from '../images/galaxy1.jpg'; 
import lyrically from '../images/lyrically.png'; 
import portfolio from '../images/portfoliosnip.PNG';
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'; 


const Portfolio = () => {
    return (
        <div className='portfolio-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
                <div className='image-box-wrapper row justify-content-center'>
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src= {netflix} alt='Netflix Clone Project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                {/* */}
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src= {galaxy1} alt='Project placeholder image'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                {/* */}
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src= {lyrically} alt='Lyrically API group project'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>
                {/* */}               
                    <div className='portfolio-image-box'>
                        <img className='portfolio-image' src= {portfolio} alt='React Portfolio'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                    </div>

                </div>
            </div>           
        </div>
    )
}

export default Portfolio; 
