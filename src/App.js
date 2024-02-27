import React, {useState} from 'react';
import {PasswordInput} from './components/PasswordInput';
import './App.css';

const MyForm = () => {
  // const [isValid, setIsValid] = useState(true); // Initial validity state

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // setIsValid(form.checkValidity()); // Update validity state based on form validity
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <PasswordInput label="Password" placeholder="Enter you password" />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
