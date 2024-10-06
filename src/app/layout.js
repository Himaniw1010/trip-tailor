import Header from "@/components/Header/Header";
import "./globals.css";
import { Jost } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "TripTailor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
