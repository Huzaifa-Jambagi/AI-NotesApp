import type { Metadata } from "next";
import "@/styles/globals.css"
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header"

const openSans = Open_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Notezy",
  description: "An app to create notes and summarize it using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.className}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster/>
          <Header/>
          <div className="flex flex-col flex-1 px-4 pt-10 xl:px-8">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
