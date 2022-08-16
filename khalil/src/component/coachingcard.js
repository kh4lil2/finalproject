import React from 'react'
const coachingcard = (props) => {
  return (
    <div className='aaa'>
      <div className='card khali'>
        <div className='title'>
          <h1 className='t'>{props.title}</h1>
        </div>
        <div>
          <img className='img' src={props.posterURL} />
        </div>

        <div className='views'>
          <p className='para'>{props.description}</p>
        </div>
      </div>
    </div>

  )
}

export default coachingcard
