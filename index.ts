import './style.css';

import { store } from './src/package/strot';

const userStore = new store({
  user: 'Bishwajit',
  isAuth: false,
  age: 21,
});

userStore.getState().subscribe((d) => console.log('New State Dispatched', d));

setTimeout(() => {
  userStore.setState({
    user: 'Praveen',
  });

  userStore.setState({
    age: 30,
  });
}, 2000);
