import Button from "../../ui/Button";

function DeleteItem() {
  return (
    <Button type="small" onClick={handleDeleteCart}>
      Delete
    </Button>
  );
}

export default DeleteItem;
