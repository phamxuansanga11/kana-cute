import React from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { Container } from "~/customs/uiCustom";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const DefaultLayout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Container className="py-5">{children}</Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
