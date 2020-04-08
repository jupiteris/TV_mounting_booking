import React from 'react';
import TVMount from './pages/tv_mount_steps';
import { Provider } from 'react-redux';
import store from './redux/store';

// import Test from './pages/tv_mount_steps/step8';

function App() {
	return (
		<Provider store={store}>
			<TVMount />
			{/* <Test /> */}
		</Provider>
	);
}

export default App;
