import React from 'react'

const InfoBox = ({content, type = InfoBox.TYPE.PRIMARY }) => {
  return (
    <div>
      <div className={type}>{content}</div>
    </div>
  )
}

InfoBox.TYPE = {
  PRIMARY: 'info-primary',
  ERROR: 'info-error',
}

export default InfoBox;