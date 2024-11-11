import React from 'react'
function CompA(props) {
  return (
    <div>
       <h2>CompA Array {props.array}</h2>
      <h2>CompA Array[0] {props.array[1]}</h2>
      <h2>person object name :{props.person_obj.name}</h2>
    </div>
  )
}

export default CompA
