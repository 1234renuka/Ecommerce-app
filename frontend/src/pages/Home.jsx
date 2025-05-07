import React from 'react'
import Hero from '../componets/Hero'
import LastestCollection from '../componets/LastestCollection'
import BestSeller from '../componets/BestSeller'
import OurPolicy from '../componets/OurPolicy'
import NewsletterBox from '../componets/NewsletterBox'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LastestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
