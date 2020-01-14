import React from 'react';
import './App.css'

function App(){
  
    return (
      <div className="App">
         <div id='main-wrapper'>
            <header>
                <div id="first">A'Jahn</div>
                <div id="second">Kimble</div>
            </header>
          <section id="top">
              <section id="bio">
                <div id="bio-planet">
                  <div id="bio-text">
                    BIO
                  </div>
                </div>
              </section>
              <section id="tech">
                <div id="tech-planet">
                  <div id="tech-text">
                  TECH
                  </div>  
                </div>  
              </section>
          </section>      
          <section id="projects">
              <div id="projects-planet">
                <div id="projects-text">
                  PROJECTS
                </div>  
              </div>
          
        </section>      
        </div>  
      </div>
    );
  
};

export default App;
