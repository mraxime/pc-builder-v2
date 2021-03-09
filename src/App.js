import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/index';
import HardwarePage from './pages/[hardware]';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/:hardware" component={HardwarePage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
