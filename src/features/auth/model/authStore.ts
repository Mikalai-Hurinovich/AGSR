import { create } from 'zustand';
import * as authApi from '../api/authApi';

interface AuthState {
  isAuthenticated: boolean;
  initialize: (authState: boolean) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  initialize: (authState) => {
    set({ isAuthenticated: authState });
  },

  login: async (email, password) => {
    const ok = await authApi.login(email, password);
    set({ isAuthenticated: ok });
    return ok;
  },

  logout: async () => {
    await authApi.logout();
    set({ isAuthenticated: false });
  },
}));
