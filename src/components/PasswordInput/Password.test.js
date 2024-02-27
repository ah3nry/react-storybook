import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PasswordInput from './PasswordInput';

describe('PasswordInput component', () => {
  it('renders correctly with default props', () => {
    const { getByLabelText, getByPlaceholderText } = render(<PasswordInput />);
    
    // Ensure label and input elements are rendered
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your password')).toBeInTheDocument();
  });

  it('toggles password visibility when the button is clicked', () => {
    const { getByText, getByLabelText } = render(<PasswordInput />);
    const toggleButton = getByText('Show Password');
    const passwordInput = getByLabelText('Password:');

    // Initial state should be password type
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click the toggle button to show the password
    fireEvent.click(toggleButton);

    // After clicking, the input type should be text
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Click the toggle button again to hide the password
    fireEvent.click(toggleButton);

    // After clicking again, the input type should be password
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  // Add more test cases for validation, error messages, etc. as needed
});
