import React from 'react';
import images from '../assets/images'
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = () =>
(
  <section id="hero-section" className="mt-14 flex flex-col flex-1 justify-center items-center text-center relative z-50" >

    <picture className="absolute bottom-0 left-0 -z-50 w-full">
      <source media="(min-width:375px )" srcset={images.BackgroundCurveDesktop} />
      <img src={images.BackgroundCurveMobile} alt="background-image" />
    </picture>
    <div className="max-w-[500px] ">
      <img src={images.IllustrationIntro} alt="hero-image" className={`w-full object-fit`} />

      <h1 className="text-white text-3xl leading-relaxed font-raleway">
      Connecting Farmers to Retail 
      Markets Directly
      </h1>
      <p className="text-white text-sm sm:text-[16px] my-4 leading-10 mx-8 text-white/60 ">"Our platform offers
       farmers a direct marketplace, eliminating middlemen, ensuring fair prices,
        and fostering strong farmer-retailer connections".
      </p>
      <Link to="/Login">
        <Button style={{ maxWidth: 250 }}>
          Get Started
        </Button>
      </Link>

    </div>




  </section>
)


export default Hero