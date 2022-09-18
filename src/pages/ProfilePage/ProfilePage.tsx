import React from 'react';

import styles from './ProfilePage.module.scss';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userRemoved } from '../../features/userSlice';
import { messageAdded } from '../../features/userActionsSlice';

const ProfilePage = () => {
  const navigate = useNavigate();
  const user: any = useSelector<any>(state => state.user);
  console.log('RECE', user);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(userRemoved());
    dispatch(messageAdded('Home Page redirection'));
    navigate('/');
  }

  const handleCancel = () => {
    dispatch(messageAdded('Cancel triggered'));
  }

  return (
    <div className={styles['wrapper']}>
      <h2>{user.greeting} {user.name}!</h2>
      <p>Logged in as {user.role}</p>

      <fieldset className={styles['button-block']}>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </fieldset>
    </div>
  )
}

export default ProfilePage;
