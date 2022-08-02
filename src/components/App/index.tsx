import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from '../Demo';

import Home from '../../screens/Home';
import CreateNewCart from '../../screens/CreateNewCart';
import SharedCart from '../../screens/SharedCart';
import SharedCartList from '../../screens/SharedCartList';
import { Provider } from '../../context/CartContext';
import SharedShoppingCart from 'screens/SharedShoppingCart/ItemDetailAmongUs';
import OverallShoppingCart from 'screens/OverallShoppingCart';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          {/* Remove the demo route if your app is ready! */}
          <Route path='/demo' component={Demo} />

          {/* Create your app routes here  */}
          <Route path='/create-new-cart' exact component={CreateNewCart} />
          <Route path='/shared-cart' exact component={SharedCart} />
          <Route path='/shared-cart-list' exact component={SharedCartList} />
          <Route path='/shared-shopping-cart' component={SharedShoppingCart} />
          <Route
            path='/overall-shopping-cart'
            component={OverallShoppingCart}
          />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default hot(App);
