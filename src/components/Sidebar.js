import React, { useContext, useState } from "react";
import { ContextProvider } from "../Global/Context";
const Sidebae = () => {
  const { loader, user } = useContext(ContextProvider);
  const username = !loader && user  && user.displayName ? user.displayName : "";
  const [state] = useState([
    { id: 1, image: require("../assets/profile.jpg").default, name: "mahnoor" },
    { id: 2, image: require("../assets/pro.jpg").default, name: "Osama" },
    { id: 3, image: require("../assets/profile.jpg").default, name: "zain" },
  ]);
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebae;
