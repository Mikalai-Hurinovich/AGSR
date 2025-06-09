import axios from 'axios';
import { API_ROUTES } from '@/features/auth/constants/apiRoutes';

export const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const res = await axios.post(API_ROUTES.LOGIN, { email, password }, { withCredentials: true });
    return res.status === 200;
  } catch {
    return false;
  }
};

export const logout = async (): Promise<void> => {
  await axios.post(API_ROUTES.LOGOUT, {}, { withCredentials: true });
};
