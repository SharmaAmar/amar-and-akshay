import React from 'react'

export const About = () => {
    return (
        <>
           <div id="about">
           <div className="container">
           <div className="row">
           <div className="col-xs-12 col-md-6">
            <img src="./images/about.jpg" alt='' />
            </div> 
            <div className="col-xs-12 col-md-6">
            <div className="about-text">
            <h2>About Us</h2>
            
             <p>React is a not-for-profit organization with over 30 years
                  experience in fighting counterfeit trade. ...
                  React is a not-for-profit organization with over 30 years experience
                  in fighting counterfeit trade. One of our main objectives is to keep
                   the costs of anti counterfeiting actions affordable.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                      <li>React is an efficient</li>
                      <li>Declarative</li>
                      <li> flexible open-source JavaScript library</li>
                   </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                      <li>ReactJS is a stronger framework</li>
                      <li>Single page App</li>
                      <li>scalable frontends of web applications</li>
                  </ul> 
               </div>
             </div>
            </div>
            </div>
          </div>
        </div>
        </div>
     
        </>
    
    )
}
