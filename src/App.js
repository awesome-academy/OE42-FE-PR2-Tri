import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SyncLoader from "react-spinners/SyncLoader";
import './App.scss';

const DefaultLayout = React.lazy(()=>import('./layouts/DefaultLayout'));
const NotFound = React.lazy(()=>import('./pages/NotFound'));
const Register = React.lazy(()=>import('./pages/Register'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="loading-page"><SyncLoader loading={true} color={'#089477'}/></div>}>
        <Router>
          <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/404" component={NotFound}/>      
            <Route path="/" component={DefaultLayout}/>
          </Switch>
        </Router>
        <ToastContainer/>
      </Suspense>
    </div>
  );
}

export default App;
