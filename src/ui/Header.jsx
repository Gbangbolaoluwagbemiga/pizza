import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <div className="bg-yellow-500	">
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOrder />

      <p>Philip</p>
    </div>
  );
}

export default Header;
