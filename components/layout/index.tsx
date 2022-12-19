import Head from "next/head";
import Container from "../container";
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <div>
        <Head>
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </Head>
      </div>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
