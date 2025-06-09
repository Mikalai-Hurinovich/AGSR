'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/features/auth/model/authStore';
import { Button } from '@/shared/ui/Button';
import ROUTES from '@/shared/constants/routes';

import * as S from './styles';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    router.push(ROUTES.HOME);
  };

  if (pathname.startsWith(ROUTES.LOGIN)) return;

  return (
    <S.HeaderContainer>
      <S.LinksContainer>
        <S.StyledLink href={ROUTES.HOME}>Домой</S.StyledLink>
        {isAuthenticated && <S.StyledLink href={ROUTES.TASKS}>Задачи</S.StyledLink>}
      </S.LinksContainer>

      <S.Nav>
        {!isAuthenticated ? (
          <Button href={ROUTES.LOGIN} variant="secondary">
            Войти
          </Button>
        ) : (
          <Button onClick={handleLogout} variant="secondary">
            Выйти
          </Button>
        )}
      </S.Nav>
    </S.HeaderContainer>
  );
}
