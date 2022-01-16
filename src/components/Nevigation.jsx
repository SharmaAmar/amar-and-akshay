import React from 'react'

export const Nevigation = () => {
    return (
        <>
        <nav class="navbar navbar-inverse navbar-fixed-top ">
        <div class="container-fluid">
          <div class="navbar-header">
            
            <a class="navbar-brand" href="#"> Asset Web Developers</a>
         </div>
         
       <ul className='nav navbar-nav  navbar-right ' id="myNavbar">
       <i className="fas fa-bars"></i>
            <li>
              <a href='#feature' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
      </div>
 </nav>
            
        </>
    )
}