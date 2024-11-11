import React from 'react'
import CompB from './CompB'

export default function CompA({data,data1}) {
  return (
    <div>
       <h2>CompA child of parent</h2>
       <CompB data={data} data1={data1}/>
    </div>
  )
}

