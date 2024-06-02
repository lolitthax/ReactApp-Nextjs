import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";



const lato = Lato({
   subsets: ["latin"] ,
   weight: ['400', '700']
  
  });

export const metadata: Metadata = {
  title: "Exemplo 1 - Itaú",
  description: "Meu exemplo de página criada utilizando Tailwind CSS e framework de React Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
    
      <body className={lato.className}>{children}</body>

    
    </html>
  );
}
