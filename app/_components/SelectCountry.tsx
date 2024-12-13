type Country = {
  name: string;
  flag: string;
};

interface SelectCountryProps {
  countries: Country[];
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
}

function SelectCountry({ countries, defaultCountry, name, id, className }: SelectCountryProps) {
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
