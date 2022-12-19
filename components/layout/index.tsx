import Container from "../container";
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
