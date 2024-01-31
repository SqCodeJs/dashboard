
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });
const title = "Dashboard";

export const metadata: Metadata = {
    title,
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col h-screen`}>
                <Header title={title} />
                <main className="flex my-8 overflow-auto">
                    <Navigation />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}