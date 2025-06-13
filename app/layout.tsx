import type { Metadata } from 'next';
import './globals.css';
import { Theme } from '@radix-ui/themes';
import Navbar from '@/components/Navbar';
import { DarkmodeProvider } from '@/store/DarkmodeProvider';
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://abdullahtech.dev'),
  title: 'Abdullah',
  icons: {
    icon: "/bg.png",
    
  },
  description:
    "Abdullah Mukri is a Software Engineer and a Fullstack Developer who's expertize are in Building Scalable and Robust Maintainable Products from Scratch",
  keywords: [
    'Abdullah Mukri',
    'Software Engineer',
    'Software Developer',
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
    site: 'https://x.com/abdullah_twt23',
    siteId: 'https://x.com/abdullah_twt23',
  },

  // appLinks: {
  //   web: {
  //     url: new URL(''),
  //   },
  // },

  category: 'Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
          </Theme>
        </DarkmodeProvider>
      </body>
    </html>
  );
}
