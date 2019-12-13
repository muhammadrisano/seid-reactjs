import React from 'react';
import styles from './buttonStyles.module.css';

export default function Button(props) {

  let HandleClick =(action)=>{
    props.fireClick()
  }
  return (
    <div>
      <button type="button" className={props.color === 'primary' ? styles.primary : ''} onClick={() => HandleClick()}>{props.msg}</button>
    </div>
  )
}
