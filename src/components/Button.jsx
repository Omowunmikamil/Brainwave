import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, children, href, px, white, onClick }) => {
  const classes = `button relative items-center inline-flex justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? " text-n-8 " : "text-n-1"} ${className || ""}`;

  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return renderButton();
};

export default Button;
