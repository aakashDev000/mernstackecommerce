import { Suspense, lazy, useEffect } from "react";
import CommonNavbar from "../common/nav/CommonNavbar";
import Footer from "../footer/Footer";
import { getDocData } from "../authentication/store/action";

const SwiperImage = lazy(() => import("./SwiperImage"));
const ProductViewList = lazy(() => import("./products/ProductViewList"));
const LoadingDialog = lazy(() => import("../common/LoadingDialog"));

const Home = () => {
  const token = localStorage.getItem("authtoken");

  useEffect(() => {
    if (token) {
      getDocData()
        .then(() => {})
        .catch((err) => {});
    }
  }, [token]);

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
