import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiosco Nextjs",
  description: "Quiosco de Comida con Next.js 14, Server Actions, App Router, TypeScript, Prisma, ZOD, Tailwind CSS y SWR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
