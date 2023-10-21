import { observer } from 'mobx-react-lite';

import TextField from './components/TextField';

import './style.css';

export const App = observer(({ editUserStorage }) => {
  
  return (
    <>
      <h1>Hello {editUserStorage.name}, the god of gays!</h1>
      <p>Start editing to see some magic happen :)</p>
      <TextField value={editUserStorage.name} onChange={editUserStorage.setName}/>
    </>
  );
});
