import React from 'react'

const Lists = ({type = 'ul', value}) => {
  if(type === 'ul'){
    return (
      <ul>
        {value.map(listitem => <li>{listitem}</li>)}
      </ul>
    )
  }
  return (
    <ol>
      {value.map(listitem => <li>{listitem}</li>)}   
    </ol>
  )
}

export default Lists;