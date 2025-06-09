import { render, screen } from '@testing-library/react';
import Form from '@/shared/ui/Form';

describe('Form Components', () => {
  test('FormContainer renders correctly', () => {
    render(
      <Form.FormContainer data-testid="form-container">
        <div>Form Content</div>
      </Form.FormContainer>,
    );

    const formContainer = screen.getByTestId('form-container');
    expect(formContainer).toBeInTheDocument();
    expect(formContainer.tagName).toBe('FORM');
    expect(screen.getByText('Form Content')).toBeInTheDocument();
  });

  test('FormGroup renders correctly', () => {
    render(
      <Form.FormGroup data-testid="form-group">
        <div>Group Content</div>
      </Form.FormGroup>,
    );

    const formGroup = screen.getByTestId('form-group');
    expect(formGroup).toBeInTheDocument();
    expect(screen.getByText('Group Content')).toBeInTheDocument();
  });

  test('Label renders correctly', () => {
    render(<Form.Label htmlFor="test-input">Test Label</Form.Label>);

    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  test('FormInput renders correctly', () => {
    render(<Form.FormInput data-testid="form-input" id="test" placeholder="Enter text" />);

    const input = screen.getByTestId('form-input');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('id', 'test');
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  test('ErrorMessage renders correctly', () => {
    render(<Form.ErrorMessage>Error occurred</Form.ErrorMessage>);

    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });
});
