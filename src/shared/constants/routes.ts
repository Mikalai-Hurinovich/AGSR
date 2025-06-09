const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  TASKS: '/tasks',
} as const;

export const PUBLIC_ROUTES = [ROUTES.HOME, ROUTES.LOGIN];

export default ROUTES;
