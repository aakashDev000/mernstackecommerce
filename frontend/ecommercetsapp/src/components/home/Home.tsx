import { Suspense, lazy } from "react";
import CommonNavbar from "../common/nav/CommonNavbar";
import Footer from "../footer/Footer";

const SwiperImage = lazy(() => import("./SwiperImage"));
const ProductViewList = lazy(() => import("./products/ProductViewList"));
const LoadingDialog = lazy(() => import("../common/LoadingDialog"));

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
