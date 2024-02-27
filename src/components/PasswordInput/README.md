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

### Properties
* `label` - Label for the input
* `placeholder` - Placeholder for the input
* `value` - Value of the input
* `onChange` - Function to call when the input value changes
* `error` - Error message to display
* `showVisibilityToggle` - Show or hide the visibility toggle
* `quality` - Quality of the password: "weak", "medium", "strong"
* `aria-label` - Accessibility label for the input
* `aria-labelledby` - Accessibility label for the input
* `aria-describedby` - Accessibility label for the input

### Examples
```
<PasswordInput
  label="Password"
  placeholder="Enter password"
  value="12345"
  onChange={function noRefCheck(){}}
  error="Invalid password"
  showVisibilityToggle
  quality="weak"
  aria-label="Password"
  aria-labelledby="label"
  aria-describedby="description"
/>