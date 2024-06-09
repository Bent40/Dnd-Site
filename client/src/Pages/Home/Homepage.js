import { useContext, useEffect, useState } from "react";
import userContext from "../../Contexts/userContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(userContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (user.username)
      fetch(`/api/campaigns/allCampaigns?user=${user.username}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.campaigns) setCampaigns(res.campaigns);
        });
  }, [user.username]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1>Campaigns</h1>
        <div
          style={{
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {campaigns.length
            ? campaigns.map((item, index) => {
                return (
                  <label
                    key={index}
                    onClick={() => {
                      navigator(`/campaign/${item._id}`);
                    }}
                  >
                    {item.displayName}
                  </label>
                );
              })
            : "No campaigns were found"}
        </div>
      </div>
    </div>
  );
}
