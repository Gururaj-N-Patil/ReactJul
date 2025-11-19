import React from 'react'
import ContactClass from './Components/ContactClass'
export default function HomeClass(props) {
  return (
    <div>
      <h1>hello {props.name}</h1>
      <ContactClass n = {props.name}/>
    </div>
  )
}
