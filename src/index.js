import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import IRouter from './router.js'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore.js'
const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<IRouter />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
