import React, { useState } from "react";

const Stories = () => {
  const [state, setState] = useState([
    { id: 1, image: "profile.jpg", name: "mani1" },
    { id: 2, image: "img16.jpg", name: "mani2" },
    { id: 3, image: "img18.jpg", name: "mani3" },
    { id: 4, image: "img10.jpg", name: "mani4" },
    { id: 5, image: "img1.jpg", name: "mani5" },
    { id: 6, image: "img6.jpg", name: "mani6" },
    { id: 7, image: "profile.jpg", name: "mani1" },
    { id: 8, image: "img16.jpg", name: "mani2" },
    { id: 9, image: "img18.jpg", name: "mani3" },
    { id: 10, image: "img10.jpg", name: "mani4" },
    { id: 11, image: "img1.jpg", name: "mani5" },
    { id: 12, image: "img6.jpg", name: "mani6" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              {/* <img src={require("../assets/profile.jpg").default} /> */}
              <img src={require(`../assets/${user.image}`).default} />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
