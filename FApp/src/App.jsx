import React from 'react'
import HomeClass from './Components/HomeClass'
import AboutClass from './Components/AboutClass'
import Greet from './Components/Greet';
export default function App() {
  let fname =  "Gururaj";
  let age = 23;
  return (
    <div>
      <h1>ClassComponent</h1>
      <HomeClass name = {fname}/>
      <AboutClass/>
      <Greet name = {fname} age = {age}/>
    </div>
  )
}
