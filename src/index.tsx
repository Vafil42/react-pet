import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { User } from './storages/EditUserStorage'

import { App } from './App';

const root = createRoot(document.getElementById('app'));

const userStorage = new UserStorage()

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
