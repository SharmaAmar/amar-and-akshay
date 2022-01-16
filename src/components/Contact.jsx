import React from 'react'

export const Contact = () => {
  return (
    <>
      
        <div id='contact'>
          <div className='container'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                  <h1>Get In Touch</h1>
                  <p>
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                <form name='sentMessage' >
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input type='text' id='name' name='name' className='form-control' placeholder='Name' required />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input type='email' id='email' name='email' className='form-control' placeholder='Email' required />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea name='message' id='message' className='form-control' rows='4' placeholder='Message' required ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg' id='button'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className='col-md-3 col-md-offset-1 contact-info'>
              <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i class="fas fa-home"></i> Address <br/>
                  </span>
                  Basant bihar colony 102 

                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone <br/>
                  </span>
                    +91 84090 68657
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                  <i class="fas fa-envelope"></i> Email <br/>
                  </span>
                  assetreactinfo@.gmail.com
                </p>
              </div>
            </div>
            <hr />
            <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li className="col-sm-4 ">
                      <a  href="">
                      <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="col-sm-4 ">
                      <a href="">
                      <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="col-sm-4 ">
                      <a href="">
                      <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='footer'>
          <div className='container text-center'>
            <p>
              &copy;  2022 React Page Template. Design by
              <a href='#Feature' rel=''>
                Team Asset
              </a>
            </p>
          </div>
        </div>
      
    </>
  )
}
