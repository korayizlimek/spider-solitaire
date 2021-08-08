import React from "react";
import TimerIcon from "@material-ui/icons/Timer";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import RefreshIcon from "@material-ui/icons/Refresh";

const Header = () => {
  return (
    <header className="header">
      <div className="header-section time-section">
        <TimerIcon style={{ fontSize: 50, color: "red" }} />
        <p>: 00:00:39</p>
      </div>
      <div className="header-section score-section">
        <WhatshotIcon style={{ fontSize: 50, color: "red" }} />
        <p>Hightest Score Ever : 9999</p>
      </div>
      <div className="header-section restart-section">
        <RefreshIcon style={{ fontSize: 50, color: "red" }} />
        <p>Restart</p>
      </div>
    </header>
  );
};

export default Header;
