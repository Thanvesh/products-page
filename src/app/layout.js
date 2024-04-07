import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Appscrip-task-Thanvesh</title>
      <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, fugit?"/>
      <meta name="keywords" content="Online shopping, indian shopping, Electronics, Clothings, Mobiles"/>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
