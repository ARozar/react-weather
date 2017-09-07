import React from 'react';
import { Route } from 'react-router-dom';

import NavMenu from '../../components/navmenu'
import Home from '../home';

const App = (props) => {

  return (<div>
    <header>
      <NavMenu />
    </header>
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
  )
}

export default App;