import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HeroInfo from './components/HeroInfo/HeroInfo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/hero/:id" component={HeroInfo} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
