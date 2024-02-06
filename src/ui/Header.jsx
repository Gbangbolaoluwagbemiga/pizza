import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500 uppercase	">
      <Link to="/" className=" tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <p>Philip</p>
    </header>
  );
}

export default Header;
