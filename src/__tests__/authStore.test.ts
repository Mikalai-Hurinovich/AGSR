import { useAuthStore } from '@/features/auth/model/authStore';
import * as authApi from '@/features/auth/api/authApi';

jest.mock('@/features/auth/api/authApi', () => ({
  login: jest.fn(),
  logout: jest.fn(),
}));

describe('AuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({
      isAuthenticated: false,
      initialize: useAuthStore.getState().initialize,
      login: useAuthStore.getState().login,
      logout: useAuthStore.getState().logout,
    });

    jest.clearAllMocks();
  });

  test('initializes with isAuthenticated set to false', () => {
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
  });

  test('initialize function sets authentication state', () => {
    const { initialize } = useAuthStore.getState();

    initialize(true);

    expect(useAuthStore.getState().isAuthenticated).toBe(true);
  });

  test('login function calls API and updates state on success', async () => {
    (authApi.login as jest.Mock).mockResolvedValue(true);

    const { login } = useAuthStore.getState();
    const result = await login('test@example.com', 'password');

    expect(authApi.login).toHaveBeenCalledWith('test@example.com', 'password');
    expect(result).toBe(true);
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
  });

  test('login function calls API and keeps state on failure', async () => {
    (authApi.login as jest.Mock).mockResolvedValue(false);

    const { login } = useAuthStore.getState();
    const result = await login('wrong@example.com', 'wrongpassword');

    expect(authApi.login).toHaveBeenCalledWith('wrong@example.com', 'wrongpassword');
    expect(result).toBe(false);
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });

  test('logout function calls API and updates state', async () => {
    useAuthStore.setState({ isAuthenticated: true });

    (authApi.logout as jest.Mock).mockResolvedValue(undefined);

    const { logout } = useAuthStore.getState();
    await logout();

    expect(authApi.logout).toHaveBeenCalled();
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });
});
