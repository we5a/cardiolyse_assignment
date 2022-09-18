import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './MessageBar.module.scss';

const MESSAGE_DURATION: number = 2000;

const MessageBar = () => {
  const message: any = useSelector<any>(state => state.userActions.message);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if(message) {
      setIsShow(true);
      setTimeout(() => {
        setIsShow(false);
      }, MESSAGE_DURATION);
    }
  }, [message]);

  return (
    <>
      {
        isShow &&
        <div className={styles['message-bar']}>
          <h4 className={styles['message-bar__title']}>User Action:</h4>
          <p className={styles['message-bar__text']}>{message}</p>
        </div>
      }
    </>
  )
}

export default MessageBar;
