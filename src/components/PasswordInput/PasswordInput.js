import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as EyeIcon } from '../../foundation/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../foundation/icons/eye-slash.svg';
import { ReactComponent as CheckCircleIcon } from '../../foundation/icons/check-circle.svg';
import { ReactComponent as ExclamationTriangleIcon } from '../../foundation/icons/exclamation-triangle.svg';
import styles from './PasswordInput.module.css';

const PasswordInput = ({
  label = 'Password',
  placeholder = 'Enter your password',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const validationText = 'Validation text';

  const handleBlur = (event) => {
    setHasFocus(false);
    setIsDirty(true);
    setIsValid(event.target.checkValidity());
  };

  const handleFocus = (event) => {
    setHasFocus(true);
  };

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const showValid = isValid && isDirty;
  const showInvalid = !isValid && isDirty;

  return (
    <div className={styles['form-control']}>
      <label className={styles.label} htmlFor="password">
        {label}
      </label>
      <div className={styles['form-control-input']}>
        <div
          className={`
          ${styles.input} 
          ${hasFocus ? styles.focused : ''}
          ${showValid ? styles.valid : ''}
          ${showInvalid ? styles.invalid : ''}
          `}
        >
          <input
            className={styles['input__control']}
            type={showPassword ? 'text' : 'password'}
            id="password"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$"
            title="Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character"
            required
          />
          <button
            className={styles['input__password-toggle']}
            onClick={handlePasswordToggle}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        </div>
      </div>
      <div
        id="validation-text"
        className={`
          ${styles['form-control__validation-text']}
          ${isValid ? styles.valid : styles.invalid}
          `}
        ariaHidden={`${isDirty ? 'false' : 'true'}`}
        aria-live="assertive"
      >
        <div
          className={`
          ${styles['validation-text__message']}
          ${isDirty ? styles.visible : ''}
          style
        `}
        >
          {isValid ? <CheckCircleIcon /> : <ExclamationTriangleIcon />}
          <span>{validationText}</span>
        </div>
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default PasswordInput;
