import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../authentication/store/useAuthStore";
import LoadingDialog from "../../common/LoadingDialog";
import { addItemInCart, resetCart } from "../../store/action";
import { useEcommerceStore } from "../../store/useEcommerceStore";
import ProductView from "./ProductView";
import { Suspense, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductViewList = () => {
  const { sellingItemList: productList } = useEcommerceStore();

  const { authtoken } = useAuthStore();

  const goto = useNavigate();

  useEffect(() => {
    if (!authtoken) {
      goto("/home");
      resetCart();
    }
  }, [goto, authtoken]);

  const addItemCort = (id: string, index: number) => {
    if (authtoken) {
      addItemInCart(id, index);
      toast.success("Item added in your cart");
    } else {
      toast.error("Please Signin first Before item adding in your cart");
    }
  };
  return (
    <Suspense fallback={<LoadingDialog />}>
      <div className="grid py-4 pl-8 grid-cols-6">
        {productList.map((product, i) => (
          <div key={i}>
            {product.uniqId && (
              <ProductView
                img={product.img}
                name={product.name}
                prize={product.prize}
                count={product.count}
                uniqId={product.uniqId}
                addItemCort={addItemCort}
                index={i}
              />
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </Suspense>
  );
};

export default ProductViewList;
