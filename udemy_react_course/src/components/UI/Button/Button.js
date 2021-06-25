import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  const {setter} = props;
  const classes = `${styles.button} ` + props.className;
  // onClick={onClick(!value)}

  const clickHandler = (event) => {
    event.preventDefault();
    setter(true);
  }

  return (
    <div className={classes}>{props.children}
    <button className={classes} onClick={clickHandler}>Add New Expense</button>
    </div>
  );
};

export default Button;
