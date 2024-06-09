import { useContext, useState } from "react";
import ActionMenu from "./MenuTabsComponents/ActionMenu";
import Summary from "./MenuTabsComponents/Summary";
import userContext from "../../../Contexts/userContext";
import DMSummary from "./MenuTabsComponents/DMSummary";

export default function MenuTabs({
  campaign,
  updateCampaign,
  setCurrentMap,
  setPing,
}) {
  const { user } = useContext(userContext);
  const [tab, setTab] = useState(0);
  const tabArr = ["Player Info", "Actions"];

  function Tab({ index }) {
    return (
      <div
        onClick={() => setTab(index)}
        style={{
          transform: tab !== index && "translateX(40%)",
          width: "100%",
          height: "10%",
          border: "1px solid black",
          borderTopLeftRadius: index === 0 && "20px",
          borderBottomLeftRadius: index === tabArr.length - 1 && "20px",
        }}
      >
        <span
          style={{
            top: "50%",
            left: "-25%",
            lineHeight: 1,
            paddingTop: "0.5rem",
            position: "relative",
            transform: "rotate(180deg) translateY(50%)",
            whiteSpace: "nowrap",
            writingMode: "vertical-rl",
          }}
        >
          {tabArr[index]}
        </span>
      </div>
    );
  }

  console.log(campaign);

  return (
    <div
      style={{
        width: "21%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "10%",
          height: "100%",
        }}
      >
        {tabArr.map((item, index) => (
          <Tab key={index} index={index} />
        ))}
      </div>
      <div
        style={{
          width: "90%",
          height: "100%",
          zIndex: "1",
          backgroundColor: "white",
          borderLeft: "1px solid black",
        }}
      >
        {tab === 0 &&
          (user.username !== campaign.users?.dm ? (
            <Summary user={campaign.users.players[user.username]} />
          ) : (
            <DMSummary
              users={campaign.users.players}
              setUsers={(u) =>
                updateCampaign({
                  users: { ...campaign.users, players: { ...u } },
                })
              }
            />
          ))}
        {tab === 1 && (
          <ActionMenu
            campaign={campaign}
            setMap={setCurrentMap}
            setPing={setPing}
          />
        )}
      </div>
    </div>
  );
}
