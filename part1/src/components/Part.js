import React from 'react'

function Part(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Number of exercise: {props.number}</p>
    </div>
  )
}

export default Part
