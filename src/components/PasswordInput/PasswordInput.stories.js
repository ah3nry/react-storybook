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

export const Focus = () => (
  <PasswordInput label="Password" placeholder="Enter your password" />
);
Focus.parameters = { pseudo: { focus: true } };

// export const Focus
