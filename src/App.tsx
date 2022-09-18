import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import HomePage from './pages/HomePage/HomePage';
import MessageBar from './components/MessageBar/MessageBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]);

function App() {

  return (
    <Provider store={store}>
      <React.Fragment>
        <RouterProvider router={router} />
        <MessageBar />
      </React.Fragment>
    </Provider>
  );
}

export default App;

