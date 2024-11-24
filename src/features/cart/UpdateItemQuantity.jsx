import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCart,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const cartItem = cart.find((item) => item.pizzaId === id);
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type={"round"} onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <p>{cartItem?.quantity}</p>
      <Button type={"round"} onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
