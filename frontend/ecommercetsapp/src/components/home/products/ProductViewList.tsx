import LoadingDialog from "../../common/LoadingDialog";
import img1 from "../../imgutils/products/img1.jpg";
import img2 from "../../imgutils/products/img2.jpg";
import img3 from "../../imgutils/products/img3.jpg";
import img4 from "../../imgutils/products/img4.jpg";
import img5 from "../../imgutils/products/img5.jpg";
import img6 from "../../imgutils/products/img6.jpg";
import img7 from "../../imgutils/products/img7.jpg";
import img8 from "../../imgutils/products/img8.jpg";
import ProductView from "./ProductView";
import { Suspense } from "react";

const productList = [
  {
    img: img1,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img2,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img3,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img4,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img5,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img6,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img7,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img8,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img8,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img8,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img8,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
  {
    img: img8,
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    prize: "$599",
  },
];

const ProductViewList = () => {
  return (
    <Suspense fallback={<LoadingDialog />}>
      <div className="grid py-4 pl-8 grid-cols-6">
        {productList.map((product, i) => (
          <div key={i}>
            <ProductView
              img={product.img}
              name={product.name}
              prize={product.prize}
            />
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default ProductViewList;
