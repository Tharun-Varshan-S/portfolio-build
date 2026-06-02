import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

import { EngineeringEcosystem } from "@/components/ui/EngineeringEcosystem";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Tharun Varshan S | AI Systems Backend Engineer",
  description: "Building intelligent systems, scalable backends, and production-grade AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-secondary/30 min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {/* Global cyber network grid overlay */}
        <div className="fixed inset-0 cyber-grid z-[1] pointer-events-none opacity-40" />
        
        {/* Engineering Ecosystem Background */}
        <EngineeringEcosystem />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Page children wrapped in relative container to render above background grids */}
        <div className="flex-1 relative z-10 w-full">
          {children}
        </div>
        
        {/* Footer */}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

