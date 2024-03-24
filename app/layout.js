import { Inter } from "next/font/google";
import "./globals.css";
import { colors } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hexleap Task",
  description: "Hexleap Task For Interns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id="bod" style={{background:"#292B32",color:"white"}}>{children}</body>
    </html>
  );
}
