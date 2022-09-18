import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './MessageBar.module.scss';

const MESSAGE_DURATION: number = 2000;

const MessageBar = () => {
  const message = useSelector<any>(state => state.userActions.message) as string;
  const [isShow, setIsShow] = useState<boolean>(false);
  const timer: any = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if(message) {
      setIsShow(true);

      if(timer) {
        clearTimeout(timer.current)
      }

     timer.current = setTimeout(() => {
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
