import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import PetsPage from '../Pages/PetsPage/PetsPage';
import Nav from './Nav';
import PetCard from '../Pages/PetPage/PetPage';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/pets/:id" exact component={PetCard} />
      <Route path="/pets" exact component={PetsPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);
export default App;
