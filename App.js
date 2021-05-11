import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import Root from './Root';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
