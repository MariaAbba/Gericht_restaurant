import React from 'react'

import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">
      {title}
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </p>
  </div>
)

export default SubHeading
