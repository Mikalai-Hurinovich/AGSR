import { Heading } from '@/shared/ui/Heading';
import * as S from '@/app/styles';
import Link from 'next/link';
import ROUTES from '@/shared/constants/routes';

export default function Home() {
  return (
    <S.Container>
      <Heading as="h1" size="large" center>
        Приложение для управления задачами
        <nav>
          <Link href={ROUTES.LOGIN}>Начать</Link>
        </nav>
      </Heading>
    </S.Container>
  );
}
