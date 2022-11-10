import React from 'react';
import img1 from '../assets/logo1.jpg';
import img2 from '../assets/logo2.png';
import img3 from '../assets/logofast.png';
import img4 from '../assets/fast-food.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Slideshow = () => {
    const myCollections =[img1,img2,img3,img4]
    
    return (
        <>
          <div className='container'>
            <Carousel autoPlay>
              {
                 myCollections.map((images ,index) => (
                    <li key={index}>
                        <img src={images} alt='slider' />
                    </li>
                 ))
              }
             </Carousel>
          </div>
        </>
    );
};

export default Slideshow;