import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import "./style.css";
import Header from "@/components/utilities/Header/Header";
import FooterPage from "@/components/utilities/Footer/Footer";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
