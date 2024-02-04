import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">
        Fast React Pizza Co.
        <p>Philip</p>
      </Link>
    </div>
  );
}

export default Header;
