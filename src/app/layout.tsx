import type { Metadata } from 'next';
import { AuthProvider } from '@/features/auth/ui/AuthProviders';

import GlobalStyle from '@/shared/styles/global';
import { Header } from '@/widgets/header';
import StyledComponentProvider from '@/shared/providers/StyledComponentsProvider';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Task manager',
  description: 'Task manager',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentProvider>
          <GlobalStyle />
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </StyledComponentProvider>
      </body>
    </html>
  );
}
