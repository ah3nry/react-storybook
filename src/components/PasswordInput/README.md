```
<PasswordInput />
```

### Usage

```
<PasswordInput
  label="Password"
  placeholder="Enter password"
/>
```

### Notes

A basic password input component built with React and uses CSS Modules for styling.

Two props are available: `label` and `placeholder`.

The component has predefined validation rules for password input:

- mandatory field
- has at least one Uppercase
- has at least one digit
- has at least 8 characters
- must contain at least one special character

In this implementation feedback is calculated and displayed with the onBlur event.

The component is 'uncontrolled' and manages its own state. Validation is carried out using native functionality (the component could be written to be controlled by its parent).

Input focus is rendered when the component is interacted with via keyboard and mouse.

Some basic testing is done using Jest and React Testing Library.

The component is linted using ESLint and formatted using Prettier.

See the root [README.md](/README.md) for instructions on how to run the project locally, etc.
