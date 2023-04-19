import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  {SideBar}  from './components/sideBar';
import  {HomePage}  from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RestaurentPage from './pages/RestaurentPage';
import FavoritePage from './pages/FavoritePage';

function App() {
  return (
    <Router>
      <div className="flex bg-slate-100">
        <SideBar />
        <div className="p-7 w-full">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/orders">
              <OrderPage />
            </Route>
            <Route path="/restaurent">
              <RestaurentPage />
            </Route>
            <Route path="/prefere">
              <FavoritePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
