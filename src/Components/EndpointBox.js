import React from 'react'

const EndpointBox = ({title, content}) => {
  return (
    <div className="endpoint-box">
      <div className="endpoint-box-title">
        {title}
      </div>
      <div className="endpoint-box-content">
        {content}
      </div>
    </div>    
  )
}

export default EndpointBox;