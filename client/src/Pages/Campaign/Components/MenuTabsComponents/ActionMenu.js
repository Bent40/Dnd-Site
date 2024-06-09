import { useContext, useState } from "react";
import userContext from "../../../../Contexts/userContext";
import LetterPicker from "./ActionMenuComponents/LetterPicker";
import MapPicker from "./ActionMenuComponents/MapPicker";

export default function ActionMenu({ campaign, setMap, setPing }) {
  const { user } = useContext(userContext);
  const [letterOpen, setLetterOpen] = useState("");
  const [mapOpen, setMapOpen] = useState("");

  const actionList = [
    {
      label: "ping map",
      desc: "Ping a spot on the map with your color",
      click: () => setPing("ping"),
    },
    {
      label: "ping enemy",
      desc: "Ping a spot on the map with the enemy icon",
      click: () => setPing("enemy"),
    },
    {
      label: "ping trap",
      desc: "Ping a spot on the map with the trap icon",
      click: () => setPing("trap"),
    },
    {
      label: "ping ally",
      desc: "Ping a spot on the map with the ally icon",
      click: () => setPing("ally"),
    },
  ];
  const dmActions = [
    {
      label: "place Letter",
      desc: "Place a letter on the map",
      click: () => setLetterOpen(!letterOpen),
      component: <LetterPicker open={letterOpen} setPing={setPing} />,
    },
    {
      label: "pick map",
      desc: "Pick the map you want to show",
      click: () => setMapOpen(!mapOpen),
      component: (
        <MapPicker open={mapOpen} maps={campaign.maps} setMap={setMap} />
      ),
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50%",
          width: "100%",
        }}
      >
      <label style={{fontSize:"5vmin" }}>Map Actions</label>
        {actionList.map((item, index) => (
          <div
            key={index}
            onClick={item.click}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label style={{ fontSize: "2vmin" }}>{item.label}</label>
            <label style={{ fontSize: "1.5vmin" }}>{item.desc}</label>
          </div>
        ))}
      </div>
      {campaign.users?.dm === user.username && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "50%",
              width: "100%",
            }}
          >
          <label style={{fontSize:"5vmin"  }}>DM Actions</label>
            {dmActions.map((item, index) => (
              <div
                key={index}
                onClick={item.click}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label style={{ fontSize: "2vmin" }}>{item.label}</label>
                <label style={{ fontSize: "1.5vmin" }}>{item.desc}</label>
                {item.component && item.component}
              </div>
            ))}
          </div>
      )}
    </div>
  );
}
