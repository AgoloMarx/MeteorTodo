import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})


// import { Meteor } from 'meteor/meteor';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
// import { Switch, Route } from 'react-router-dom';

// // Redux set-up
// import { Provider } from 'react-redux';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { routerReducer } from 'react-router-redux';
// import { combineReducers } from 'redux';

// // Middlewares
// import thunk from 'redux-thunk';
// import createHistory from 'history/createBrowserHistory';
// import DynamicImport from './DynamicImport';

// const splash = DynamicImport({ loader: () => import('./splash') });
// const login = DynamicImport({ loader: () => import('./login') });

// // Create a browser history
// const history = createHistory();

// // Create our precious middlewares
// const middleWares = [
//   routerMiddleware(history), // Middleware for history, we need this for push(location), replace(location), goBack(), goForward() functions.
//   thunk, // Middleware for delaying & allowing conditional dispatch of actions. 'https://github.com/gaearon/redux-thunk'
// ];


// // // Create our redux store
// const store = createStore((() => {}), (applyMiddleware(...middleWares)));



// export default function App() {
//   return (
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <Switch>
//           <Route exact path="/splash" component={splash} />
//           <Route exact path="/login" component={login} />
//         </Switch>
//       </ConnectedRouter>
//     </Provider>
//   )
// }