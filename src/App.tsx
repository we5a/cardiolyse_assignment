import React from 'react';
import styles from './App.module.scss';
import { Button } from 'primereact/button';

function App() {
  const toShow = () => {
    console.log("To show")
  }
  return (
    <div className={styles.test}>
      Initialization
      <Button label='Show' onClick={toShow} />
    </div>
  );
}

export default App;

