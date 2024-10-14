"use client"
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './EditActivityForm.module.css'; // Assuming you have CSS modules

import { BiPlus } from 'react-icons/bi'; // Replace with your actual icon import
import Button from '../Button/Button';
import Input from '../Input/Input';
import useDeviceType from '@/hooks/useDeviceType';

const EditActivityForm = ({ data, id, onDeleteClick, state }) => {
  const deviceType = useDeviceType()
  const [newData, setNewData] = useState({activity_title: "", time:"", description:""})
  useEffect(() => {
    data && setNewData(data)
  }, [data])
  const handleClick = () => {
      onDeleteClick(id)
  };
  const handleInputChange = (e) => {
    const {name, value} = e.target
    const objectKey = name.split("__")[2]
    setNewData((prev) => {
      const oldData = {...prev, [objectKey] : value}
      // console.log(oldData)
      return oldData
    })
  }
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
      <Input state={state} id={id} value={newData.activity_title} label="Activity Title" col={deviceType == "mobile" ? 12 : 4} placeholder='Enter Activity Title' onChange={handleInputChange}/> 
      <Input state={state} id={id} value={newData.time} type="time"label="Time" col={deviceType == "mobile" ? 12 : 4} onChange={handleInputChange}/>
      <Input state={state} id={id} value={newData.description} label="Description" type="textarea" placeholder='Enter Description' col={12} onChange={handleInputChange}/>
    </div>
  );
}

export default EditActivityForm;
