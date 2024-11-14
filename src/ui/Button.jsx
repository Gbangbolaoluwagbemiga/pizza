import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const classname =
    "inline-block rounded-full bg-yellow-400 px-2 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed lg:px-4 lg:py-3";

  if (to) {
    return (
      <Link to={to} className={classname}>
        {" "}
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={classname}>
      {children}
    </button>
  );
}

export default Button;
