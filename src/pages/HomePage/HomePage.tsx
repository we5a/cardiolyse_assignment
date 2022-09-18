import React, { useState, useEffect } from "react";
import styles from './HomePage.module.scss';
import { title } from '../../assets/properties';
import { RadioButton } from 'primereact/radiobutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../../features/userSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const user: any = useSelector<any>(state =>state.user);
  const [selectedMessage, setSelectedMessage] = useState<string>(user.greeting);
  const [name, setName] = useState<string>(user.name);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   return () => {
  //     console.log('Clean form')
  //   }
  // });

  const radioSwitched = (e: any): void => {
    setSelectedMessage(e.value);
  }

  const handleNameChange = (e: any): void => {
    setName(e.target.value);
  }

  const handleSumbit = (e: any): void => {
    e.preventDefault();

    dispatch(userAdded({name, greeting: selectedMessage}));
    setName('');
    navigate('/profile');
  }

  return (
    <div className={styles['wrapper']}>

      <div className={styles['content']}>
        <h2 className={styles['content__title']}>{title}</h2>

        <form onSubmit={handleSumbit}>
          <fieldset className={styles['radio-fieldset']}>
            <RadioButton
              inputId="greet1"
              name="greeting"
              value="Welcome"
              onChange={radioSwitched}
              checked={selectedMessage === 'Welcome'}
            />
            <label htmlFor="greet1">Welcome</label>
          </fieldset>

          <fieldset className={styles['radio-fieldset']}>
            <RadioButton
              inputId="greet2"
              name="greeting"
              value="Thank you"
              onChange={radioSwitched}
              checked={selectedMessage === 'Thank you'}
            />
            <label htmlFor="greet2">Thank You</label>
          </fieldset>

          <fieldset className={styles['input-fieldset']}>
            <label htmlFor="name">Name:</label>
            <InputText id="name" value={name} onChange={handleNameChange} required />
          </fieldset>

          <Button label="Submit" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default HomePage;
