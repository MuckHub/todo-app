import { render, screen } from '@testing-library/react';

import Input from './Input';

test('renders an error message if input is empty', () => {
  render(<Input isValid={false} />);
  screen.getByText('This input cannot be empty.');
});
