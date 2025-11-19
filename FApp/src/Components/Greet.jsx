import React from 'react'

export default function Greet(props) {
  return (
    <div>
      <h1>hello {props.name} age is {props.age}</h1>
    </div>
  )
}
