interface ICheck {
  name?: string;
  label: string;
  value?: string;
  rows?: number;
  className?: string;
  placeholder?: string;
  maxLength?: number;
  onChange?: any;
}

const TextArea = ({
  name,
  label,
  value,
  rows,
  maxLength,
  onChange,
  placeholder,
  className,
}: ICheck) => {
  return (
    <div className="form-group">
      <label htmlFor="comment">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        rows={rows}
        maxLength={maxLength}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
