import Bag from "./SummaryComponents/Bag";
import Stat from "./SummaryComponents/Stat";

export default function Summary({ user }) {
  console.log(user);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <label
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          Currency: {user.currency}Ð
        </label>
        <label>{user.charName}</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "20%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40%",
              background: `linear-gradient(to right,red ${
                user.currHP / user.maxHP / 0.01
              }%,white ${100 - user.currHP / user.maxHP / 0.01}%)`,
            }}
          />
          <label style={{ color: "white", width: "20%" }}>
            {user.currHP}/{user.maxHP}
          </label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "20%",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "40%",
              background: `linear-gradient(to right,Blue ${
                user.currAP / user.maxAP / 0.01
              }%,white ${100 - user.currAP / user.maxAP / 0.01}%)`,
            }}
          />
          <label style={{ color: "white", width: "20%" }}>
            {user.currAP}/{user.maxAP}
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          height: "18%",
          width: "100%",
        }}
      >
        <Stat label={"Str"} stat={user.str} />
        <Stat label={"Dex"} stat={user.dex} />
        <Stat label={"Con"} stat={user.con} />
        <Stat label={"Int"} stat={user.int} />
        <Stat label={"Wis"} stat={user.wis} />
        <Stat label={"Chr"} stat={user.chr} />
      </div>
      <Bag bag={user.bag} />
    </div>
  );
}
