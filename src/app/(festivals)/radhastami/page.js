'use client'
import MainPoster from '@/components/Festivals/Radhastmi/01MainPoster/MainPoster'
import DonationcCard from '@/components/Festivals/Radhastmi/03DonationCard/DonationCard'
import React from 'react'

const Radhastami = () => {
  return (
    <div
      style={{
        background: '#654ea3',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #eaafc8, #654ea3)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #eaafc8, #654ea3)'  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
    >
      <MainPoster />
      <DonationcCard /> 
    </div>
  )
}

export default Radhastami
