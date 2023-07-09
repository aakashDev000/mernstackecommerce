import CommonDialog from "../../common/CommonDialog";
import CartDialogContent from "./CartDialogContent";
const Cart = ({ cartClose }: { cartClose: any }) => {
  return (
    <>
      <div>
        <CommonDialog
          content={
            <>
              <CartDialogContent cartClose={cartClose} />
            </>
          }
          title={"YOUR CART"}
        />
      </div>
    </>
  );
};

export default Cart;
