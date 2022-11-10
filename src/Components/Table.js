import React, { useState, useEffect } from 'react'

const Table = ({ type, content, headers }) => {
  const [currentActiveTab, setActiveTab] = useState(null); 
  useEffect(() => {
    if(type === Table.TYPE.TABBED) {
      setActiveTab(1)
    }
  }, [type])
  if(type === Table.TYPE.TABBED){
    return (
      <table className="tabbed-table">
        <thead>
          <tr>
            <th>{headers[0]}</th>            
            <th>
              <button 
                className={currentActiveTab === 1 ? 'active-table-tab' : ''} 
                onClick={() => setActiveTab(1)}
              >
                {headers[1][0]}
              </button>
              <button 
                className={currentActiveTab === 2 ? 'active-table-tab' : ''} 
                onClick={() => setActiveTab(2)}
              >
                {headers[1][1]}
              </button>
            </th>            
          </tr>
        </thead>
        <tbody>
          {content.map(trow => (
            <tr>
              <td>{trow[0]}</td>
              <td>{currentActiveTab === 1 ? trow[1][0] : trow[1][1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map(trow => (
          <tr>
            {trow.map(tdata => <td>{tdata}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.TYPE = {
  TABBED: 'tabbed',
}

export default Table;