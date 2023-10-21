interface TextFieldInterface {
  value: string;
  onChange: (value: string) => void;
}

const TextField = ({value, onChange}: TextFieldInterface) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default TextField;
