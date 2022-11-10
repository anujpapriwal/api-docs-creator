import React from 'react'

const LanguageTabs = () => {
  const urlParams= new URLSearchParams(window.location.search);
  const selectedLanguage = urlParams.get('language');
  
  return (
    <div className="section-container" id="tab-container">
      <div className="tab-content"></div>
      <div className="tab-code-content">            
        <div className="nav-tabs">
            <div>
              <a href="?language=shell">
                <button className={selectedLanguage === 'shell' ? 'active' : ''}>cURL</button>
              </a>
              <a href="?language=xhr">
                <button className={selectedLanguage === 'xhr' ? 'active' : ''}>XHR</button>
              </a>
              <a href="?language=node">
                <button className={selectedLanguage === 'node' ? 'active' : ''}>Node</button>
              </a>
              <a href="?language=python">
                <button className={selectedLanguage === 'python' ? 'active' : ''}>Python</button>
              </a>
              <a href="?language=json">
                <button className={selectedLanguage === 'json' ? 'active' : ''}>JSON</button>
              </a>                  
            </div>
          </div>            
      </div>
    </div>  
  )
}

export default LanguageTabs;