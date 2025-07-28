import Navbar from "./Navbar";
import Header from "./Header";

import { Noto_Sans_New_Tai_Lue } from "next/font/google";

const schrift = Noto_Sans_New_Tai_Lue({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className={schrift.className}>
      <Header />

      <main>{children}</main>

      <Navbar />
    </div>
  );
}
