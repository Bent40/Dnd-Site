import { useState } from "react";

export default function DMSummary({ users, setUsers }) {
  const [players, setPlayers] = useState(users);

  return (
    users && (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ height: "90%", width: "100%" }}>
          {Object.values(players).map((item, index) => {
            let hp = item.currHP / item.maxHP / 0.01;
            return (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <label>{item.charName}</label>
                <div
                  style={{
                    position: "relative",
                    width: "40%",
                    height: "20%",
                    background: `linear-gradient(to right,red ${hp}%,white ${
                      100 - hp
                    }%)`,
                  }}
                />
                <label style={{ color: "white", width: "20%" }}>
                  <input
                    onChange={(e) =>
                      setPlayers({
                        ...players,
                        [Object.keys(players)[index]]: {
                          ...item,
                          currHP: e.target.value,
                        },
                      })
                    }
                    style={{
                      width: "40%",
                      textAlign: "center",
                      borderRadius: "20px",
                    }}
                    value={item.currHP}
                  />
                  /{item.maxHP}
                </label>
              </div>
            );
          })}
        </div>
        <button onClick={() => setUsers(players)}>Set Info</button>
      </div>
    )
  );
}
