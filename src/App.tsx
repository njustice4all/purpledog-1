import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from 'store';
import HomeTemplate from 'components/templates/Home';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <HomeTemplate />
    </Provider>
  );
}

export default App;
