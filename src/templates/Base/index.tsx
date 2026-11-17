import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
}

const Base = ({ children }: BaseProps) => {
    return (
        <>
          <Header />
          <main>{children}</main>
          <Footer/>
        </>
    )
}

export default Base