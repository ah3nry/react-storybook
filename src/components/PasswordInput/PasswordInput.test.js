import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import PasswordInput from './PasswordInput';

expect.extend(toHaveNoViolations);

describe('PasswordInput component', () => {
  it('renders correctly with default props', () => {
    render(<PasswordInput />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
  });

  it('toggles password visibility when the button is clicked', () => {
    render(<PasswordInput label="Password" />);
    const toggleButton = screen.getByRole('button', { name: 'Show password' });

    const passwordInput = screen.getByLabelText('Password');

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders with no AXE violations', async () => {
    const { container } = render(<PasswordInput />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
