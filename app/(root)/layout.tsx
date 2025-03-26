import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_SERVER_URL } from "@/lib/constants";
import { APP_DESCRIPTION } from "@/lib/constants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
