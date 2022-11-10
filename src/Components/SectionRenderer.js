import React from 'react'
import CodeboxRenderer from './CodeboxRenderer';
import EndpointBox from './EndpointBox';
import InfoBox from './InfoBox';
import Section from './Section';
import Table from './Table';

const SectionRenderer = (SectionMarkup, key) => {  
  const content = [];
  const codeContent = []; 
  SectionMarkup.forEach((element, index) => {    
    switch (element.type) {
      case 'h1':
        content.push(<h1 key={element.id} id={element.id}>{element.value}</h1>)
        break;
      case 'h2':
        content.push(<h2 key={element.id} id={element.id}>{element.value}</h2>)
        break;
      case 'h3':
        content.push(<h3 key={element.id} id={element.id}>{element.value}</h3>)
        break;
      case 'paragraph':
        content.push(<p key={`element-${index}`}>{element.value}</p>)
        break;
      case 'endpoint':
        content.push(<EndpointBox title={element.boxtitle} content={element.boxcontent}/>)
        break;
      case 'list':
        if(element.listtype === 'ordered'){
          content.push(
            <ol>
              {element.value.map((listItem, index)=> <li key={index}>{listItem}</li>) }
            </ol>
          )
        }else {
          content.push(
            <ul>
              {element.value.map((listItem, index)=> <li key={index}>{listItem}</li>) }
            </ul>
          )
        }
        break;
      case 'info':
        if(element.boxtype === InfoBox.TYPE.PRIMARY){
          content.push(<InfoBox type={InfoBox.TYPE.PRIMARY} content={element.value}/>)
        }
        if (element.boxtype === InfoBox.TYPE.ERROR){
          content.push(<InfoBox type={InfoBox.TYPE.ERROR} content={element.value}/>)
        }
        break;
      case 'code':
        codeContent.push(
          <CodeboxRenderer content={element.values} />
        )
        break;
      case 'table':
        content.push(
          <Table 
            type={element.tabletype}
            headers={element.headers} 
            content={element.rows}
          />
        )   
    
      default:
        break;
    }
  });
  return <Section key={key} content={content} code={codeContent}/>
}

export default SectionRenderer;