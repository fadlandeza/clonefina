const Button = ({ type = "submit ", text, onClick, color = "bg-sky-500" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full min-w-60 h-12 text-white font-semibold rounded-xl cursor-pointer ${color}`}
    >
      {text}
    </button>
  );
};
export default Button;
