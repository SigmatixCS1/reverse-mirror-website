import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import FirebaseAnalytics from "./firebase-analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reverse Mirror",
    template: "%s | Reverse Mirror",
  },
  description:
    "Humanity unconsciously creates the systems that consume it.",
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/stories", label: "Stories" },
  { href: "/characters", label: "Characters" },
  { href: "/mirror", label: "Mirror" },
  { href: "/systems", label: "Systems" },
  { href: "/gallery", label: "Gallery" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <FirebaseAnalytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#220b0d] focus:px-3 focus:py-2 focus:text-sm focus:text-zinc-100 focus:outline-none"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold tracking-[0.18em] uppercase text-zinc-100"
            >
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full bg-[#8d141a]"
              />
              Reverse Mirror
            </Link>
            <nav aria-label="Primary navigation">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-300 md:justify-end">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#d9a85c] focus-visible:text-[#d9a85c]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-black/70">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-8">
            <p>© {year} Reverse Mirror. All rights reserved.</p>
            <p className="text-zinc-500">
              Humanity unconsciously creates the systems that consume it.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
