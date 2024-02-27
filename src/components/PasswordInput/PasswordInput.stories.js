import { userEvent, within } from '@storybook/testing-library';
import PasswordInput from './PasswordInput';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const Focus = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByLabelText('Password', {
      selector: 'input',
    });
    await userEvent.click(passwordInput);
  },
};
