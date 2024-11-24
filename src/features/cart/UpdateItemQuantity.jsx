import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCart,
  getCurrentItemId,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const currentItemId = useSelector(getCurrentItemId(id));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={"round"} onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <p className=" font-semibold">{currentItemId}</p>
      <Button type={"round"} onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
