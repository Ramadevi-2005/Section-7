import React from 'react'
import "./Lab2.css"
const Lab2 = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='heading'>KL University</div>
        <div className='menu'>
          <span>Home</span>
          <span>PortFolio</span>
          <span>About</span>
          <span>Login</span>
        </div>
      </div>
      <div className='content'>
        <div className='logo'>
          <img width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTriarVFvdFWUe9t-hiAS8h7EvjWIjFn_NFw&s"></img>
        </div>
        <div className='details'>
          <p>Project</p>
          <p>Domain</p>
          <p>Batch</p>
          <p>Year</p>
        </div>
      </div>
      <div className='footer'>
        <div classname='s_footer'>
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default Lab2