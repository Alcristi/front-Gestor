import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <>
      <Header />
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
	  <Footer />
	</>
  );
};
