import React, { useState } from 'react';

import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../UI/Card/Card';
import styles from  './ExpenseItem.module.css';

//this is a stateless component or presentational component
// sometimes called a dumb component just because
// it doesnt have internal state it just outputs data.

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={styles.expense_item}>
      <ExpenseDate date={props.date} />
      <div className={styles.expense_item__description}>
        <h2>{props.title}</h2>
        <div className={styles.expense_item__price}>${props.amount}</div>
      </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
