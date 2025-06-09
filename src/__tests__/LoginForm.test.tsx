import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/widgets/login-form/LoginForm';
import { useAuthStore } from '@/features/auth/model/authStore';
import ROUTES from '@/shared/constants/routes';
import { MOCK_CREDENTIALS } from '@/features/auth/constants/mockCredentials';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/features/auth/model/authStore', () => ({
  useAuthStore: jest.fn(),
}));

describe('LoginForm Component', () => {
  const mockPush = jest.fn();
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    jest.mocked(useAuthStore).mockReturnValue({
      login: mockLogin,
    });
  });

  test('renders login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText('Вход в аккаунт')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Пароль')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Войти' })).toBeInTheDocument();
  });

  test('handles form submission with valid credentials', async () => {
    mockLogin.mockResolvedValue(true);

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: MOCK_CREDENTIALS.email },
    });

    fireEvent.change(screen.getByLabelText('Пароль'), {
      target: { value: MOCK_CREDENTIALS.password },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Войти' }));

    expect(mockLogin).toHaveBeenCalledWith(MOCK_CREDENTIALS.email, MOCK_CREDENTIALS.password);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(ROUTES.TASKS);
    });
  });

  test('shows error message with invalid credentials', async () => {
    mockLogin.mockResolvedValue(false);

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'wrong@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Пароль'), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Войти' }));

    expect(mockLogin).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.getByText('Неверная почта или пароль')).toBeInTheDocument();
    });

    expect(mockPush).not.toHaveBeenCalled();
  });
});
