import type { Metadata } from 'next';
import './globals.css';
import { Theme } from '@radix-ui/themes';



export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/abhub23'),
  title: 'Abdullah',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black`}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
