import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import TopBar from "@/components/topbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Utopia-Dashboard-UI",
  description: "Utopia-Dashboard-UI for the portfolio project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-screen h-screen flex flex-row">
          <SideBar />
          <div className="w-full h-full flex flex-col">
            <TopBar />
            <div className="h-[94vh]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
