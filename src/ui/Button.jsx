function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-400 px-2 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300
focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed lg:px-4 lg:py-3"
    >
      {children}
    </button>
  );
}

export default Button;
