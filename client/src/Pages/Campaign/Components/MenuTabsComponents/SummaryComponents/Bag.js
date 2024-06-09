export default function Bag({ bag }) {
  console.log(bag);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {bag
        .sort((a, b) => a.type - b.type)
        .map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              borderRadius: "20px",
              border: "1px solid black",
              width: "90%",
            }}
          >
            {item.type === "general"}
            <label>{item.itemName}</label>
          </div>
        ))}
    </div>
  );
}
