import { PUBLIC_ROUTES } from '@/shared/constants/routes';

export const isPublicRoute = (path: string): path is (typeof PUBLIC_ROUTES)[number] =>
  PUBLIC_ROUTES.includes(path as (typeof PUBLIC_ROUTES)[number]);
