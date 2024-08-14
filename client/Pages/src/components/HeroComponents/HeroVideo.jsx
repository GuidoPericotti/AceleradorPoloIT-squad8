import React from 'react'
import HeroVid from '../../../src/assets/HeroVideo.mp4';


export const HeroVideo = () => {
  return (
    <>
    <video width="100%" autoPlay muted loop>
        <source src={HeroVid} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    </>
  )
}
