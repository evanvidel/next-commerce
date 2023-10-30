import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next E--Commerce 13",
  description: "Next E--Commerce utilizando a versão 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <NavBar/>
        <main className=" h-screen p-16">{children}</main>
      </body>
    </html>
  );
}
