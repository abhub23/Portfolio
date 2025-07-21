import type { Metadata } from 'next';
import './globals.css';
import { Theme } from '@radix-ui/themes';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import { DarkmodeProvider } from '@/store/DarkmodeProvider';
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://abdullahtech.dev'),
  title: 'Abdullah - Fullstack Engineer who loves to build stuff',
  icons: {
    icon: '/icon.webp',
  },
  description: 'A Fullstack Engineer who enjoys writing Typescript and Go',
  keywords: [
    'Abdullah Mukri',
    'Abdullah Tech',
    'Abdullah Dev',
    'Abdullah Technology',
    'Abdullah Developer',
    'Abdullah Fullstack Engineer',
    'Software Engineer',
    'Software Developer',
    'Fullstack Engineer',
    'Fullstack Developer',
    'Portfolio Website',
    'Javascript',
    'Typescript',
    'React js',
    'Node js',
    'Next js',
  ],
  authors: {
    url: 'https://github.com/abhub23',
    name: 'Abdullah Mukri',
  },
  publisher: 'Abdullah Mukri',

  twitter: {
    card: 'summary_large_image',
    site: '@abdullah_twt23',
    creator: '@abdullah_twt23',
    title: '@abdullah_twt23',
    description: 'Abdullah Mukri Portfolio Twitter card',
    images: {
      url: 'https://abdullahtech.dev/og-image.png',
      type: 'image/png'
    }
  },

  appLinks: {
    web: {
      url: new URL('https://abdullahtech.dev'),
    },
  },

  category: 'Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black">
        <DarkmodeProvider>
          <Theme className="dark:!bg-black">
            <Navbar />
            {children}
            <Toaster />
          </Theme>
        </DarkmodeProvider>
      </body>
    </html>
  );
}
