import React from 'react'

import { images } from '../../constants'
import { SubHeading } from '../../components'

import './Chef.css'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            With a profound commitment to excellence, we craft dishes that tell
            stories of passion, innovation, and a love for exceptional flavors.
          </p>
        </div>
          <p className="p__opensans">
            Every plate is a canvas, and every bite is an exploration of taste
            designed to captivate your senses and elevate your dining
            experience. Welcome to a world where the chef′s vision comes to life
            on your plate, a symphony of ingredients harmonizing to create
            unforgettable moments.
          </p>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
)

export default Chef
