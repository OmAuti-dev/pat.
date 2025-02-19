import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ModalProvider from "@/providers/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./providers";
import UserFetcher from "./UserFetcher";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAT.",
  description: "Automate Your Work With PAT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
            <ReduxProvider>
              <UserFetcher />
              {children}
              </ReduxProvider>
            </ModalProvider>
            <Toaster position="bottom-right" reverseOrder={false} />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
