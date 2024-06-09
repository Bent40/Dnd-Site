import { useEffect, useState } from "react";

export default function PlayMap({ info }) {
  const [mapInfo, setMapInfo] = useState([]);

  useEffect(() => {
    const { size } = info;
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push([]);
      for (let j = 0; j < size; j++) {
        arr[i].push(null);
      }
    }
    setMapInfo(arr);
  }, [info]);

  return (
    <div
      style={{
        backgroundImage: `URL(${info.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        width: "80%",
        height: "100%",
        position:"relative"
      }}
    >
      <table
        style={{
          width: "100%",
          height: "100%",
          borderSpacing: 0,
        }}
      >
        <tbody style={{ width: "100%", height: "100%" }}>
          {mapInfo.map((row, rowIndex) => (
            <tr style={{ width: "100%" }} key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cell ? (
                  <td
                    style={{
                      border: "1px solid black",
                      width: `${100 / mapInfo.length}%`,
                      height: `${100 / row.length}%`,
                    }}
                    key={cellIndex}
                  >
                    {cell}
                  </td>
                ) : (
                  <td
                    style={{
                      border: "1px solid black",
                      width: `${100 / mapInfo.length}%`,
                      height: `${100 / row.length}%`,
                    }}
                    key={cellIndex}
                  />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
