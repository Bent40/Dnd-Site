export default function Stat({ label, stat }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "30%",
        height: "40%",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "50%",
          paddingBottom: "5%",
          border: "1px solid black",
          borderRadius:"50px",
          position: "relative",
        }}
      >
        <label
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "1.2vmin",
          }}
        >
          {stat}
        </label>
      </div>
      <label>{label}</label>
    </div>
  );
}
