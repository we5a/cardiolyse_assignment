import React from 'react';

import styles from './ProfilePage.module.scss';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  }

  const handleCancel = () => {
    console.log('Handle Cancel');
  }

  return (
    <div className={styles['wrapper']}>
      <h2>Welcome [username here]</h2>
      <p>Logged in as [role here]</p>

      <fieldset className={styles['button-block']}>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </fieldset>
    </div>
  )
}

export default ProfilePage;
