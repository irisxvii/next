import localFont from "next/font/local";
import "./globals.css";
import { Fugaz_One, Open_Sans } from '@next/font/google';

const opensans = Open_Sans({
  weight: '400',  
  subsets: ['latin'],  
});

const fugazOne = Fugaz_One({
  weight: '400',  
  subsets: ['latin'],  
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "trackit",
  description: "track ur daily mood everyday of the year!",
};

export default function RootLayout({ children }) {

  const header=(
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={"text-base sm:text-lg textGradient "+ fugazOne.className}>Drackit</h1>
    </header>
  )

  const footer=(
    <footer className="p-4 sm:p-8 ">
      <p className={"subtext text-indigo-500 " + fugazOne.className}>created with luv</p>
    </footer>
  )

  return (
    <html lang="en">
      <body
         className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col `+ opensans.className}
         style={{ minHeight: '100vh' }} >
        {header}
        {children}
        <footer className="mt-auto"></footer>
        {footer}
      </body>
    </html>
  );
}
