import { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeboxRenderer = ({content}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('shell');
  const [isCodeCopied, toggleCodeCopiedState] = useState(false);
  useEffect(() => {
    const urlParams= new URLSearchParams(window.location.search);
    setSelectedLanguage(urlParams.get('language'));    
    return () => {
      setSelectedLanguage(null);
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if(isCodeCopied) toggleCodeCopiedState(false);
      return () => null
    }, 4000)
  }, [isCodeCopied])

  const languageMap = {
    xhr: 'javascript',
    node: 'javascript',
    shell: 'shell',
    python: 'python',
    json: 'json'
  }
  return (
    <div className="codebox-container">
      <div className="codebox-copybtn-container">
        <button 
          disabled={isCodeCopied}
          onClick={() => {
            navigator.clipboard.writeText(content[selectedLanguage]);
            toggleCodeCopiedState(true);
          }}>
          {isCodeCopied ? "Copied" : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter 
        className="codebox" 
        language={languageMap[selectedLanguage]} 
        style={nightOwl}
      >
        {content[selectedLanguage]}
      </SyntaxHighlighter>      
    </div>
  )
}

export default CodeboxRenderer;