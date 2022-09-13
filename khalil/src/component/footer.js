import React from 'react';
import { MDBFooter } from 'mdbreact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-lg-start text-muted'>

      <section className='footer lml'>
        <div className=''>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h4 className='t'>
                <i ></i>Description</h4>
              <p className='para'>
              I am at an age where I just want to be fit and healthy. Our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean and workout hard. 
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mo' >
              <h4 className='t'>INFORMATIONS DE CONTACT</h4>
              <p className='para'>
                <h4>Adress</h4>
                5090 Monastir,Bekalta
              </p>
              <p className='para'>
                <h4>Phone</h4>
                (+216)23289961
              </p>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h4 className='t'>Social Follow</h4>

              <div className="social-container">

                <a href=""
                  className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href=""
                  className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href=""
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  );
}