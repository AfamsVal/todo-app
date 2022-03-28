interface ICheck {
  name?: string;
  label: string;
  value?: string;
  checked?: boolean;
  onChange?: any
}

const Checkbox = ({ name, label, value, checked, onChange }: ICheck) => {
  return (
    <div className="form-check mb-3">
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input checkbox-padding checkbox"
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          name={name}
        />
        <span className="checkbox-text font-12 text-black-one">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
