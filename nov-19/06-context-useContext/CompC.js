import React, { useContext } from 'react'
import {context} from './App'
 export default function CompC() {
    const x=useContext(context)
  return (
    <div>
      <h3>Component-C  {x}</h3>
      
    </div>
  )
}
