import React from 'react'

const Section = ({content, code}) => {
  return (    
    <div className="section-container">
      <div className="content">{content}</div>
      <div className="code-content">{code}</div>
    </div>    
  )
}

export default Section;