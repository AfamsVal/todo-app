interface ICheck {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element | any;
  disabled?: boolean;
}

const Button: React.FC<ICheck> = ({
  type,
  onClick,
  className,
  children,
  disabled,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={className}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
