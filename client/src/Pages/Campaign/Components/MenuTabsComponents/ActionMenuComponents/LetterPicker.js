export default function LetterPicker({ open, setPing }) {
  const options = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));
  return (
    open && (
      <div>
        {options.map((item, index) => (
          <label
            style={{ "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" } }}
            key={index}
            onClick={() => setPing(`Letter${item}`)}
          >
            {item}
          </label>
        ))}
      </div>
    )
  );
}
