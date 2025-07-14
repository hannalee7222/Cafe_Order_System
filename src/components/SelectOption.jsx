function SelectOption({ name, options, setOptions, itemOptions }) {
  return (
    <li>
      <strong>{name}</strong>
      {itemOptions.map((option, idx) => (
        <label key={option} style={{ marginRight: '12px' }}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={options[name] === idx}
            onChange={() =>
              setOptions((prev) => ({
                ...prev,
                [name]: idx,
              }))
            }
          />
          {option}
        </label>
      ))}
    </li>
  );
}

export default SelectOption;
