import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tanks from './components/Tanks';
import TankDescription from './components/TankDescription';
import EditTank from './components/EditTank';
import AddTank from './components/AddTank';
import Form from './components/Form'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Form} exact />
          <Route path='/tanks' component={Tanks} exact />
          <Route path='/tank/:tankId' component={TankDescription} exact />
          <Route path='/tank/edit/:tankId' component={EditTank} exact />
          <Route path='/add/tank' component={AddTank} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
