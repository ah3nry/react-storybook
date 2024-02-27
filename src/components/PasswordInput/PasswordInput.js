import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PasswordInput.module.css';

const PasswordInput = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const validationText = 'Validation text';

  const handleBlur = (event) => {
    setHasFocus(false);
    setIsDirty(true);
    setIsValid(event.target.checkValidity());
  };

  const handleFocus = (event) => {
    setHasFocus(true);
  }

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const validatePassword = (value) => {
  //   try {
  //       let message = 'Validation text';
  //       if (!value) {
  //         message = 'Password is required';
  //       } else if (value.length < 8) {
  //         message = 'Password must be at least 8 characters long';
  //       } else if (!/[A-Z]/.test(value)) {
  //         message = 'Password must contain at least one uppercase letter';
  //       } else if (!/\d/.test(value)) {
  //         message = 'Password must contain at least one digit';
  //       } else if (!/[^a-zA-Z0-9]/.test(value)) {
  //         message = 'Password must contain at least one special character';
  //       }
  //   } catch (error) {
  //     console.error('Error in validatePassword', error); // eslint-disable-line no-console
  //   }
  // };

  const showValid = isValid && isDirty;
  const showInvalid = !isValid && isDirty;

  return (
    <div className={styles['form-control']}>
      <label className={styles.label} htmlFor="password">{label}</label>
      <div className={styles['form-control-input']}>
        <div className={`
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
            <button className={styles['input__password-toggle']} 
              onClick={handlePasswordToggle}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
                {showPassword ? 
                  <svg width="20" height="18" stroke='currentColor' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05742 1.05806C2.3015 0.813981 2.69723 0.813981 2.94131 1.05806L5.28068 3.39744C6.667 2.58848 8.27982 2.125 9.99935 2.125C14.2467 2.125 17.8328 4.94899 18.9856 8.8204C19.0203 8.93673 19.0203 9.06062 18.9857 9.17696C18.4238 11.0659 17.2835 12.7043 15.7709 13.8877L17.9413 16.0581C18.1854 16.3021 18.1854 16.6979 17.9413 16.9419C17.6972 17.186 17.3015 17.186 17.0574 16.9419L2.05742 1.94194C1.81335 1.69786 1.81335 1.30214 2.05742 1.05806ZM14.8795 12.9962C16.2034 11.9998 17.2126 10.6085 17.7323 8.99886C16.6774 5.73481 13.6132 3.375 9.99935 3.375C8.62579 3.375 7.33305 3.71538 6.19954 4.31629L8.27607 6.39282C8.76998 6.06583 9.36271 5.875 9.99936 5.875C11.7253 5.875 13.1244 7.27411 13.1244 9C13.1244 9.63665 12.9335 10.2294 12.6065 10.7233L14.8795 12.9962ZM11.6918 9.8085C11.8089 9.56374 11.8744 9.2897 11.8744 9C11.8744 7.96447 11.0349 7.125 9.99936 7.125C9.70967 7.125 9.43562 7.19044 9.19086 7.30761L11.6918 9.8085ZM3.71962 5.37497C3.98316 5.5979 4.01607 5.99226 3.79315 6.25579C3.11776 7.0542 2.59404 7.98409 2.26568 9.00114C3.32053 12.2652 6.38478 14.625 9.99861 14.625C10.7677 14.625 11.5108 14.5183 12.2145 14.3193C12.5467 14.2254 12.8921 14.4185 12.986 14.7507C13.0799 15.0828 12.8868 15.4282 12.5546 15.5222C11.7414 15.7521 10.8838 15.875 9.99861 15.875C5.75127 15.875 2.16513 13.051 1.01232 9.1796C0.977682 9.06328 0.977663 8.93938 1.01227 8.82304C1.38578 7.56734 2.01495 6.42242 2.8388 5.4485C3.06173 5.18496 3.45609 5.15204 3.71962 5.37497Z" fill="#141413"/>
                  </svg>
                  : <svg width="18" height="14" stroke='currentColor' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00124 1.375C5.41171 1.375 2.36432 3.70311 1.28975 6.93346C1.27493 6.97803 1.27494 7.02648 1.28979 7.07104C2.36569 10.2991 5.41192 12.625 8.99978 12.625C12.5893 12.625 15.6367 10.2969 16.7113 7.06654C16.7261 7.02197 16.7261 6.97352 16.7112 6.92896C15.6353 3.70094 12.5891 1.375 9.00124 1.375ZM0.103655 6.53891C1.34303 2.81309 4.85741 0.125 9.00124 0.125C13.1432 0.125 16.6562 2.8106 17.8971 6.53371C17.9974 6.8346 17.9975 7.16015 17.8974 7.46109C16.658 11.1869 13.1436 13.875 8.99978 13.875C4.85787 13.875 1.34484 11.1894 0.103928 7.46629C0.0036434 7.16541 0.00354793 6.83986 0.103655 6.53891ZM9.00057 5.125C7.96503 5.125 7.12557 5.96447 7.12557 7C7.12557 8.03553 7.96503 8.875 9.00057 8.875C10.0361 8.875 10.8756 8.03553 10.8756 7C10.8756 5.96447 10.0361 5.125 9.00057 5.125ZM5.87557 7C5.87557 5.27411 7.27468 3.875 9.00057 3.875C10.7265 3.875 12.1256 5.27411 12.1256 7C12.1256 8.72589 10.7265 10.125 9.00057 10.125C7.27468 10.125 5.87557 8.72589 5.87557 7Z" fill="#141413"/>
                  </svg>
                    
                }
            </button>
        </div>
      </div>
      <div id="validation-text"
          className={`
          ${styles['form-control__validation-text']}
          ${isValid ? styles.valid : styles.invalid}
          `}
          ariaHidden={`${isDirty ? 'false' : 'true'}`}
        >
          {showInvalid &&
            <>
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.49487 0.86934C5.16357 -0.28978 6.83643 -0.28978 7.50513 0.86934L11.7649 8.25318C12.4332 9.41166 11.5972 10.8593 10.2598 10.8593H1.74024C0.402845 10.8593 -0.433214 9.41166 0.235114 8.25318L4.49487 0.86934ZM6.62563 3.91035C6.62563 3.6104 6.38248 3.36725 6.08254 3.36725C5.7826 3.36725 5.53946 3.6104 5.53946 3.91035V6.3938C5.53946 6.69375 5.7826 6.93691 6.08254 6.93691C6.38248 6.93691 6.62563 6.69375 6.62563 6.3938V3.91035ZM6.08254 7.83746C5.7826 7.83746 5.53946 8.08062 5.53946 8.38056V8.38553C5.53946 8.68548 5.7826 8.92863 6.08254 8.92863H6.08689C6.38682 8.92863 6.62997 8.68548 6.62997 8.38553V8.38056C6.62997 8.08062 6.38682 7.83746 6.08689 7.83746H6.08254Z" fill="#EE0000"/>
              </svg>
              <span>{validationText}</span>
            </>
          } 
           {showValid &&
           <>
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM8.31562 4.71994C8.50081 4.46067 8.44076 4.10035 8.18148 3.91515C7.92221 3.72996 7.56189 3.79001 7.37669 4.04929L5.46484 6.72587L4.56179 5.82282C4.33649 5.59752 3.9712 5.59752 3.7459 5.82282C3.5206 6.04813 3.5206 6.41341 3.7459 6.63872L5.13052 8.02333C5.25043 8.14325 5.41704 8.20433 5.58605 8.19034C5.75506 8.17635 5.90935 8.08871 6.00792 7.95071L8.31562 4.71994Z" fill="#038A00"/>
           </svg>
           
           <span>{validationText}</span>
         </>
              
      }
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default PasswordInput;
