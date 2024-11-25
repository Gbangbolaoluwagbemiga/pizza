import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex items-center justify-between py-2">
        <p>
          <span className="font-semibold">{quantity}&times;</span>{" "}
          <span className="italic">{name}</span>
        </p>
        <p className="font-medium">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
