import React, { Component } from 'react';
import Home from '../home/home';
import Profile from '../profile'
import Signin from '../singin'
import Signup from '../singup'
import HomePage from '../HomePage'
import Nav from '../Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import TabContainer from '../Footer/footer'
import './App.css';



class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>


         <div style={{ height: '100%' }}>
            <Nav />
         </div>
           
           

            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/HomePage' exact component={HomePage} />
              <Route path='/Signup' exact  component={Signup} />
              <Route path='/signin' exact component={Signin} />
              <div  style={{ marginTop: '40px' }}>
              <Route path='/profile' exact component={Profile} />
              </div>
              
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    )
  }
}
export default App;