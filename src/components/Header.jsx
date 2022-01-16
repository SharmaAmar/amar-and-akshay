import React from 'react'

export const Header = () => {
    return (
        <>
        <header>
       <div className='intro'> 
              <div className='intro-text' id='textheader'>
                <h1>
                  The react world
                  <span></span>
                </h1>
                <p>A React developer is simply a frontend developer that has extensive experience using 
                  React and React Native. They are able to apply their knowledge of JavaScript to create user interfaces that delight users.
                   Full-Stack React developers are also proficient with using MongoDB, Express, and Node.
                   <br />
                   ReactJS is also represented as React or React.js. Many organizations mainly Fortune 500 
                   companies have been preferring ReactJS because of its salient features. It facilitates developers
                    to build large web apps that can change the data without page reloading.
                    It can seamlessly work as a fusion with other JavaScript libraries like AngularJS.</p>
                <a
                  href='#Features'
                  className='btn btn-custom page-scroll' id="headerlearnmore"
                >
                  Learn More
                </a>{' '}
              </div>
            </div> 
      </header>
            
        </>
    )
}
