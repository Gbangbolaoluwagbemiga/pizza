import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const classname =
    "inline-block rounded-full px-2 py-2 lg:px-4 bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const style = {
    primary: classname + " lg:py-3",
    small: classname + " lg:py-2 text-xs",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {" "}
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
