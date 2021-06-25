import {React, useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import styles from  './NewExpense.module.css';
import Button from '../UI/Button/Button';
const NewExpense = (props) => {
  const [showForm,setShowForm] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  }
  let conditionalContent = <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={setShowForm}
      />
  
  if (!showForm) {
    conditionalContent = <Button setter={setShowForm} value={showForm}/>
  }
  return (
    <div className={styles.new_expense}>
      {conditionalContent}
    </div>
  );
};

export default NewExpense;
