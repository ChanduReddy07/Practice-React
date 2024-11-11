import React from 'react'
import CompB from './CompB'

export default function CompA({data}) {
  return (
    <div>
       <h2>CompA</h2>
       <CompB data={data}/>
    </div>
  )
}

