import React from 'react'

const map = () => {
  return (
    <div className='mapp'>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.356493890037!2d10.990293202346805!3d35.61893709249785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13023d64c3225979%3A0x6d869fa3fd5582cc!2sOiLibya%20Bekalta!5e0!3m2!1sfr!2stn!4v1657123105115!5m2!1sfr!2stn" 
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              >
         </iframe>
    </div>
  )
}

export default map

