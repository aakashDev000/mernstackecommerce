import { Suspense } from "react";
import LoadingDialog from "../common/LoadingDialog";
import CommonNavbar from "../common/nav/CommonNavbar";
import SwiperImage from "./SwiperImage";
import ProductViewList from "./products/ProductViewList";

const Home = () => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      <CommonNavbar>
        <SwiperImage />

        <ProductViewList />
      </CommonNavbar>
    </Suspense>
  );
};

export default Home;
