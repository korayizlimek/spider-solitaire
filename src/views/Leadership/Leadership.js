import React, { useState } from "react";
import Cup from "../../assets/svg/icons/trophy.svg";

const Leadership = ({ score }) => {
  const [name, setName] = useState();
  const [formDisplay, setFormDisplay] = useState("inline");

  const [staticLeaderships, setStaticLeaderships] = useState([
    { order: 1, name: "recai", score: 9990 },
    { order: 2, name: "koray", score: 9660 },
  ]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newStaticLeadership = [...staticLeaderships];
    newStaticLeadership.push({ order: 3, name: name, score: score });
    setStaticLeaderships(newStaticLeadership);
    setFormDisplay("none");
  };

  const ClassNameLeader = (leaderName) => {
    if (leaderName === name) {
      return "leader-active";
    }
  };

  return (
    <div className="leadership">
      {/* firework */}
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      {/* finish firework */}
      <h2 data-testid="title">You Win</h2>
      <form data-testid="form" action="" style={{ display: formDisplay }}>
        <input
          data-testid="input"
          type="text"
          value={name}
          onChange={(e) => handleName(e)}
          placeholder="Enter yourname"
        />
        <button data-testid="button" onClick={(e) => formSubmit(e)}>
          Enter
        </button>
      </form>

      {staticLeaderships.map((leader) => (
        <div
          key={leader.order}
          className={`leader  ${ClassNameLeader(leader.name)}`}
        >
          <img src={Cup} alt="leadercup" />
          <div>{leader.order}</div>
          <div>{leader.name}</div>
          <div>{leader.score}</div>
        </div>
      ))}
    </div>
  );
};

export default Leadership;
