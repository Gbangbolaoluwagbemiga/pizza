import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItems } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDeleteCart() {
    dispatch(deleteItems(id));
  }

  return (
    <Button type="small" onClick={handleDeleteCart}>
      Delete
    </Button>
  );
}

export default DeleteItem;
