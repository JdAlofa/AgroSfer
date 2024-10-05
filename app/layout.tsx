import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from './ui/TopNav'
import Sidebar from './ui/Sidebar'


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

export const metadata: Metadata = {
  title: "Agrosfer",
  description: "Agrosfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}>
        <div className="flex flex-col h-full">
          <TopNav />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}