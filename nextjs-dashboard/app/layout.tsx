import '@/app/ui/global.css';
// import { inter } from './ui/fonts';
import { Lusitana, Open_Sans } from 'next/font/google';
// ## FONTS ##
import { Inter } from 'next/font/google';

const opensans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans', // This sets the CSS variable
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={opensans.variable}>
      <body className="font-opensans">
        {children}
      </body>
    </html>

  );
}
