const Button2 = ({
  href,
  type = "submit",
  text,
  onClick,
  color = "bg-sky-500",
}) => {
  return (
    <a
      href={href}
      type={type}
      onClick={onClick}
      className={`min-w-60 h-12 text-white font-semibold rounded-xl cursor-pointer ${color} inline-flex items-center justify-center`}
    >
      {text}
    </a>
  );
};
export default Button2;
