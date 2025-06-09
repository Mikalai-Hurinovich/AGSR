'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/features/auth/model/authStore';

import { Heading } from '@/shared/ui/Heading';
import { Button } from '@/shared/ui/Button';
import ROUTES from '@/shared/constants/routes';
import Form from '@/shared/ui/Form';

import * as S from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (success) {
      router.push(ROUTES.TASKS);
    } else {
      setError('Неверная почта или пароль');
    }
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.BackLink href={ROUTES.HOME}>← Назад</S.BackLink>

        <Heading as="h2" size="medium" center>
          Вход в аккаунт
        </Heading>
        <S.BackLinkWrapper></S.BackLinkWrapper>
        <form onSubmit={handleSubmit}>
          <Form.FormGroup>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.FormInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.FormGroup>

          <Form.FormGroup>
            <Form.Label htmlFor="password">Пароль</Form.Label>
            <Form.FormInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <Form.ErrorMessage>{error}</Form.ErrorMessage>}
          </Form.FormGroup>

          <S.ButtonWrapper>
            <Button type="submit" variant="primary" fullWidth>
              Войти
            </Button>
          </S.ButtonWrapper>
        </form>
      </S.LoginCard>
    </S.LoginContainer>
  );
};

export default LoginForm;
