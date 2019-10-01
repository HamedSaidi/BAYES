import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store'
import logo from './logo.svg';
import { DetailsPage, ListPage } from './pages'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <ConnectedRouter history={history}>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={ListPage} />
                <Route exact path="/tournament/:tournamentId" component={DetailsPage} />
              </Switch>
            </Suspense>
          </Router>
        </ConnectedRouter>
      </main>
    </div>
  );
};

export default App;
