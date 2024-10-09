import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import SubscriptionForm from './SubscriptionForm'
import Testimonial from './Testimonial'
import Howitworks from './Howitworks'

const Home = () => {
    return (
        <div className='w-full bg-primary-hero-bluecolor'>
            <Hero />
            <div className='bg-primary-mainbody-bluecolor'>
                <div className=' px-4 py-4 md:px-16 md:py-8'>
                    <Feature />
                    <Howitworks />
                    <Testimonial />
                    <SubscriptionForm />
                </div>

            </div>
        </div>
    )
}

export default Home