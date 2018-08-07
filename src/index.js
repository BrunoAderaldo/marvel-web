import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import feather from 'feather-icons';
import HeroInfo from './components/HeroInfo/HeroInfo';
import Navbar from './components/Navbar/Navbar';

document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
});

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Navbar></Navbar>
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/hero/:id" component={HeroInfo} />
        </Switch>
      </div>
    </React.Fragment>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
