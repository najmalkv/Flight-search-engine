import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


it('renders without crashing', () => {
  const div = document.createElement('div');

  const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	// create store
	const store = createStore(
		reducer,
		composeEnhancers(applyMiddleware(thunk))
	);

	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		div
	);


  ReactDOM.unmountComponentAtNode(div);
});


