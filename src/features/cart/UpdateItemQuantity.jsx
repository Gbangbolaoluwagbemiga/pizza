import Button from "../../ui/Button";

function UpdateItemQuantity({ id }) {
  return (
    <div>
      <Button type={round}>-</Button>
      <Button type={round}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
