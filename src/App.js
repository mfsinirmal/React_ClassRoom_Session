import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {SayHello} from "./Components/SayHello"
// import Welcome from "./Components/Welcome"
// import ComponentA from "./Components/ComponentA"
// import GreetPerson from "./Components/GreetPerson"
//import Singular from "./Components/Singular"
// import ListItem from "./Components/ListItem"
// import EventHandler from "./Components/EventHandler"
// import ControlledForm from "./Components/ControlledForm"
// import UncontrolledForm from "./Components/UncontrolledForm"
// import FragmentTable from "./Components/FragmentTable"
// import ClickDemoCount from "./Components/ClickDemoCount"
// import HoverDemoCount from "./Components/HoverDemoCount"
// import ContextComponentA from "./Components/ContextComponentA"
// import ConextComponent from "./Components/ConextComponent"
// import StateHook from "./Components/HookComponents/StateHook"
// import StateObject from "./Components/HookComponents/StateObject"
//import EffectHook from "./Components/HookComponents/EffectHook"
// import BookStore from "./Components/BookStore"
// import {Provider} from "react-redux"
// import store from "./Redux/BookStore/store"

import Home from "./Components/RouterDemo/Home"
import About from "./Components/RouterDemo/About"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App() {
  
  return (
      <div className="App">
        {/* <SayHello />
        <Welcome />
        <ComponentA/>*/}
        {/* <Singular /> */}
        {/* <GreetPerson companyName="Mindfire" companyLocation="Noida" phone="9898988989" Building="Assotech"><img src="https://images.uline.com/is/image/content/dam/images/S/S4500/S-4080.jpg?$Mobile_SI$&iccEmbed=1&icc=AdobeRGB"></img></GreetPerson> */}

        {/* <ListItem/> */}
        {/* <EventHandler/> */}
        {/* <ControlledForm /> */}
        {/* <UncontrolledForm/> */}
        {/* <FragmentTable /> */}
        {/* <ClickDemoCount/>
        <HoverDemoCount/> */}      
        {/* <ContextComponentA/> */}
        {/* <StateHook/> */}
        {/* <EffectHook/> */}
        {/* <Provider store={store}>
        <BookStore />
        </Provider> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>                
                <li>
                  <Link to="/About">About</Link>
                </li>                
              </ul>
            </nav>
            <switch>
              <Route path="/About" exact>
                <About/>
              </Route>
              <Route path="/" exact>
                <Home/>
              </Route>              
            </switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
