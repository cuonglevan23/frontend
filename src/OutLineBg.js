import Header from "./component/Header";
import Footer from "./component/Footer";

const OutLineBg = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default OutLineBg;
