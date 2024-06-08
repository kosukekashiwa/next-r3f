import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/Providers";
import AppNavigationMenu from "@/app/_components/AppNavigationMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "r3f",
  description: "React Three Fiber",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="sticky top-0 py-3">
            <AppNavigationMenu />
          </header>
          <main className="border-solid border-2 border-indigo-600">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
