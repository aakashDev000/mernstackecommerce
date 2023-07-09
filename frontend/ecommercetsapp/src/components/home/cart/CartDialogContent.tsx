import { Button } from "@material-tailwind/react";
// import img from "../../imgutils/products/img1.jpg";
import CartCardView from "./CartCardView";
import { useEcommerceStore } from "../../store/useEcommerceStore";
import { addItemsThroughCart, deleteItemInCart } from "../../store/action";

const CartDialogContent = ({ cartClose }: { cartClose: any }) => {
  const { cartItemList } = useEcommerceStore();

  const addItem = (id: string, index: number) => {
    console.log("id", id);
    addItemsThroughCart(id, index);
  };
  const deleteItem = (id: string, index: number) => {
    deleteItemInCart(id, index);
  };

  return (
    <div className="w-full">
      <div className="p-2 w-auto h-96 overflow-y-auto">
        {cartItemList && cartItemList.length > 0 ? (
          <div className="overflow-y-auto w-full scroll-m-2">
            {cartItemList.map((item: any, index: number) => (
              <div key={index}>
                <CartCardView
                  addItem={addItem}
                  deleteItem={deleteItem}
                  count={item.count}
                  id={item.uniqId}
                  img={item.img}
                  rating={"4.0"}
                  prize={item.prize}
                  name={item.name}
                  index={index}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 font-semibold pt-40 pl-20 font-serif text-xl">
            {" "}
            Your Cart is Empty 😞
          </div>
        )}
      </div>
      <div className="mt-8 pl-72">
        <div>
          <Button onClick={cartClose} className="text-white bg-red-600 w-28">
            {" "}
            Close{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartDialogContent;
