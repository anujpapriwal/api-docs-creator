
import React, { Component } from 'react'
import './App.css';
import sixsenseLogo from './logo-6sense.svg'
import renderer from './renderer';
import SectionRenderer from './Components/SectionRenderer';
import { scrollTo } from './utils';
import LanguageTabs from './Components/LanguageTabs';

const getChildHeadings = structure => {
  return structure.map((sectionHash) => sectionHash.filter(
    (value) => value.type === 'h1' || value.type === 'h2' || value.type === 'h3'
  )).flat(2);
}

export default class App extends Component {
  constructor(props){ 
    super(props)         
    this.state = { currentHash: null } 
  } 

  componentDidMount(){
    window.addEventListener("hashchange", (e) => {
      const updatedHash = e.target.location.hash.substring(1);      
      this.setState({ currentHash: updatedHash })
      scrollTo(updatedHash)
    });

    document.addEventListener('scroll', (event) => {      
      const sectionHeadings = getChildHeadings(renderer).map(({ id }) => {
        const targetHeading = document.getElementById(id);
        return { element: targetHeading, id };
      });

      sectionHeadings.forEach(({ id, element }) => {        
      const targetsToRemoveClassFrom = sectionHeadings.filter(
        ({id: elementId}) => elementId !== id);
      const quarterScreenHeight = window.innerHeight / 4;
      const target = element.offsetTop;      
        if (window.scrollY >= target) {
          document.querySelector(`a#${id}`).classList.add('active');
          targetsToRemoveClassFrom.forEach((currentHeading) => {
            document.querySelector(`a#${currentHeading.id}.navlink`).classList.remove('active');
          })
        }        
      });
    });
  
    const hash = window.location.hash.substring(1);
    this.setState({ currentHash: hash });
    scrollTo(hash);
  }

  componentWillUnmount(){
    window.removeEventListener("hashchange", () => null);
    document.removeEventListener("scroll", () => null);
  }
  
  render() {
    return (
      <div> 
        <div className="container">
        <div className="sider">
          <div className="logo-container">          
            <img src={sixsenseLogo} />
          </div>
          <div className="logo-text">API DOCS</div>
          {getChildHeadings(renderer).map(heading => {
            if(heading.type === 'h1'){
              return (
                <a 
                  id={heading.id}
                  href={`#${heading.id}`} 
                  className={`navlink ${this.state.currentHash===heading.id ? 'active': ''}`}
                >
                  <h1 key={heading.id}>{heading.value}</h1>
                </a>
              )
            }
            if(heading.type === 'h2'){
              return (
                <a 
                  id={heading.id}
                  href={`#${heading.id}`} 
                  className={`navlink ${this.state.currentHash===heading.id ? 'active': ''}`}
                >
                  <h2 key={heading.id}>{heading.value}</h2>
                </a>
              )
            }
            if(heading.type === 'h3'){
              return (
                <a 
                  id={heading.id}
                  href={`#${heading.id}`} 
                  className={`navlink ${this.state.currentHash===heading.id ? 'active': ''}`}
                >
                  <h3 key={heading.id}>{heading.value}</h3>
                </a>
              )
            }
            return <h1 key='not-supported'>Not supported</h1>
          })}
        </div>
        <div className="content-container" id="content-container">
        <LanguageTabs />  
          {renderer.map((el, sectionIndex) => SectionRenderer(el, sectionIndex))}
        </div>        
        </div>
      </div>
    );
  }
}