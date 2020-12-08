import './App.css';
import React,{useState} from 'react';
import {Route,NavLink,Switch} from 'react-router-dom'
import Home from './components/Home'
import Todo from './components/Todo'
import Contact from './components/Contact'
//import ResumeContent from './contactComponents/ResumeContent'
import Gallery from './components/Gallery'
import Project from './components/Project'
import Support from './components/Support'
import Music from './components/Music'
import CreateForm from './components/CreateForm'
import logo from './img/logo.svg'
import re_logo from './logo/logo.svg'
//import bg from './img/bg'
//import Topic  from 'Topic.css';

function App() {

  var [mode,setMode] = useState(true);
  var mode_content = 'main';

  /*
  getReadMode() {
    var _article = null;
    if(mode_content === 'main') {
      _article = <Contact
                onChangeContent={function(resume){
           
                }}
              ></Contact>
    } else if(mode_content === 'resume') {
      _article = <ResumeContent
                onChangeContent={function(resume){
 
                }}
              ></ResumeContent>
    }
    return 
  }
  */

  return (
    <div className="App">
      <header id="header">
        <span className="logo">
          <NavLink 
            to="/home"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </span>
        <span className="logoDesc">
          <h3>React Project EX</h3>
          <p>리액트 PORTFOLIO_CHOI_R</p>
        </span>
        <span>
          {mode ?
          <input type="button" value="GUEST MODE" className="g_mode_btn" onClick={
            function(){
              setMode(false);
            }
          } />
          :
          <input type="button" value="USER MODE" className="u_mode_btn" onClick={  
            function(){
              setMode(true);
            }
          } />
          }
        </span>
      </header>
      <nav id="topNav">
        <ul className="nav">
          <li>
            <NavLink 
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/todo"
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/project"
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/music"
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/support"
            >
              Support
            </NavLink>
          </li>
        </ul>

      </nav>
      <article id="banner">
        <div className="banner_Container">
          <img className="App-logo" src={re_logo}  alt="logo" />
          <h2>React Web - PORTFOLIO</h2>
          <p>react.js를 사용하여 웹사이트를 제작하였습니다.</p>
        </div>
      </article>
      <article id="content">
        <div className="container">
          <Switch>
            <Route
              path="/todo"
            >
              <Todo></Todo>
            </Route>
            <Route
              path="/contact"
            >
              <Contact></Contact>
            </Route>
            <Route
              path="/gallery"
            >
              <Gallery></Gallery>
            </Route>
            <Route
              path="/project"
            >
              <Project></Project>
            </Route>
            <Route
              path="/home"
            >
              <h2 className="home_title">캘리그라피 작품 감상하세요!</h2>
              <Home></Home>
            </Route>
            <Route
              path="/music"
            >
              <Music></Music>
            </Route>
            <Route
              path="/support"
            >
              <Support></Support>
            </Route>
          </Switch>
        </div>
      </article>
    </div>
  );
}

export default App;
