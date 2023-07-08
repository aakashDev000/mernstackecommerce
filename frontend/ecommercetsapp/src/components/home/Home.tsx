import { Suspense } from "react";
import LoadingDialog from "../common/LoadingDialog";
import CommonNavbar from "../common/nav/CommonNavbar";
import SwiperImage from "./SwiperImage";
import ProductViewList from "./products/ProductViewList";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      {/* Navbar */}
      <CommonNavbar>
        {/* Image Slider */}
        <SwiperImage />

        {/* Product List */}
        <ProductViewList />

        {/* Footer */}
        <Footer />
      </CommonNavbar>
    </Suspense>
  );
};

export default Home;
