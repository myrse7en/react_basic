import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




ReactDOM.render(
  <App name={'Dr. Seuss'} />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// stops page from refreshing, however components are still rendered
if (module.hot) {
  module.hot.accept();
}
