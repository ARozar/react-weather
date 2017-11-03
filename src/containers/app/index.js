import React from 'react';
import { Route } from 'react-router-dom';

import NavMenu from '../../components/navmenu'
import Home from '../home';
import Characters from '../characters';

const App = (props) => {

  return (<div>
    <header>
      <NavMenu/>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters} />
    </main>
  </div>
  )
}

export default App;