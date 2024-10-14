"use client"
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './ActivityForm.module.css'; // Assuming you have CSS modules

import { BiPlus } from 'react-icons/bi'; // Replace with your actual icon import
import Button from '../Button/Button';
import Input from '../Input/Input';
import useDeviceType from '@/hooks/useDeviceType';

const ActivityForm = ({ id, onDeleteClick, state }) => {
  const deviceType = useDeviceType()
  // const ffff = 
  // const currentRef = useRef()
  const handleClick = () => {
    onDeleteClick(id)
  };
  // const [dayCount, setDayCount] = useState(1);
  // const handleDurationChange = (e) => {
  //   setDayCount(e.target.value);
  // };

  return (
    <div className={styles.wrapper} id={id}>
      <Button
        icon={<BiPlus />}
        className={styles.delete}
        variant="red"
        buttonType="button"
        type="button"
        onClick={handleClick}
      />
      <Input state={state} id={id} label="Activity Title" col={deviceType == "mobile" ? 12 : 4} placeholder='Enter Activity Title' />
      <Input state={state} id={id} type="time" label="Time" col={deviceType == "mobile" ? 12 : 4} />
      <Input state={state} id={id} label="Description" type="textarea" placeholder='Enter Description' col={12} />
    </div>
  );
}

export default ActivityForm;
