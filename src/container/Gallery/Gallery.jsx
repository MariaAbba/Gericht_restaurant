import React from 'react'

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Gallery.css'

const Gallery = () => {
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Istagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>
          Explore our vibrant Photo Gallery to catch a glimpse of the exquisite
          dishes, inviting ambiance, and the joyous moments shared by our
          guests. Each image tells a story of flavor, warmth, and passion. Join
          us on a virtual journey through the lens, and let the images whet your
          appetite for an unforgettable dining experience. Bon appétit!
        </p>
      </div>
    </div>
  )
}

export default Gallery
