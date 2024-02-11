import React from 'react'

import './MenuItem.css'

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuItem">
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="p__cormorant" style={{ color: '#DCCa87' }}>
          {title}
        </p>
      </div>

      <div className="app__menuItem-dash" style={{}}/>

      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuItem-sub">
      <p className='p__opensans' style={{color:'AAA'}}>{tags}</p>
    </div>
  </div>
)

export default MenuItem
