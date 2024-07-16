'use client'
import MainPoster from '@/components/Festivals/BalaramPurnima/01MainPoster/MainPoster'
import DonationSection from '@/components/Festivals/BalaramPurnima/04DonationSection/DonationSection'
import React from 'react'

const gradientBackground = {
  background: '#AAFFA9',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #11FFBD, #AAFFA9)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #11FFBD, #AAFFA9)'  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
};

const BalaramPurnima = () => {
  return (
    <div style={gradientBackground}>
      <MainPoster />
      <DonationSection /> 
    </div>
  )
}

export default BalaramPurnima;
