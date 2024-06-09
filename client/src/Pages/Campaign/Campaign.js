import { useContext, useEffect, useState } from "react";
import PlayMap from "./Components/PlayMap";
import { useParams } from "react-router-dom";
import MenuTabs from "./Components/MenuTabs";
import userContext from "../../Contexts/userContext";

export default function Campaign() {
  const { _id } = useParams();
  const { user } = useContext(userContext);
  const [campaign, setCampaign] = useState(false);
  const [currentMap, setCurrentMap] = useState(-1);
  const [ping, setPing] = useState("");

  const updateCampaign = (changes) => {
    fetch(`/api/campaigns/updateChar?_id=${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(changes),
    });
  };

  useEffect(() => {
    if (_id && user) {
      const socket = new WebSocket(
        `ws://109.186.95.226:5000/api/campaigns/current?_id=${_id}&user=${user.username}`
      );
      socket.addEventListener("open", (event) => {
        socket.send("new");
      });
      socket.addEventListener("message", (event) => {
        setCampaign(JSON.parse(event.data));
      });
      const handleBeforeUnload = () => {
        socket.send("close");
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [_id, user]);

  return (
    campaign && (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <PlayMap
            campaign={campaign}
            updateCampaign={updateCampaign}
            ping={ping}
            info={{
              src:
                currentMap >= 0
                  ? campaign.maps[currentMap]?.src
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1024px-Question_mark_%28black%29.svg.png",
              size: currentMap >= 0 ? campaign.maps[currentMap]?.size : 1,
            }}
          />
        </div>
        <MenuTabs
          campaign={campaign}
          updateCampaign={updateCampaign}
          setMap={setCurrentMap}
          setPing={setPing}
        />
      </div>
    )
  );
}
