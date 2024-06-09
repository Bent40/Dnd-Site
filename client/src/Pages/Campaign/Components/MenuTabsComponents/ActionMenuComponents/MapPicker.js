export default function MapPicker({ open, maps, setMap }) {
  return (
    open && (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
        }}
      >
        {maps.map((item, index) => (
          <img
            style={{
              objectFit: "fill",
              width: "30%",
              height: "100%",
              padding: "5px",
            }}
            key={index}
            src={item.src}
            onClick={() => setMap(index)}
            alt={`map#${index + 1}`}
          />
        ))}
      </div>
    )
  );
}
