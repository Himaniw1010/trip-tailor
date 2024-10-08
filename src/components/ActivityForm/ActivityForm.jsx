"use client"
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './ActivityForm.module.css'; // Assuming you have CSS modules

import { BiPlus } from 'react-icons/bi'; // Replace with your actual icon import
import Button from '../Button/Button';
import Input from '../Input/Input';

const ActivityForm = ({ n, id, onDeleteClick }) => {
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
      <Input label="Activity Title" col={4}/> 
      <Input type="time"label="Time" col={4}/>
      <Input label="Description" type="textarea" col={12}/>
    </div>
  );
}

export default ActivityForm;
