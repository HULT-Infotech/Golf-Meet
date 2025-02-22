import React from 'react'
import LandingSection from '../components/LandingSection'
import CompeteWorldwideSection from '../components/CompeteWorldwideSection'
import Navbar from '../components/Navbar'
import HowItWorksSection from '../components/HowItWorksSection'



function HomePage() {
  return (
   <>
   {/* Section 1  */}
   <LandingSection/>

    {/* Section 2 */}
    <CompeteWorldwideSection/>
   
   <Navbar/>
   {/* Section 3 */}
   <HowItWorksSection/>

   <section className='min-h-screen'></section>
   <section className='min-h-screen bg-black'></section>
   </>
  )
}

export default HomePage