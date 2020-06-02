import React from "react";
import "./ToggleButton.scss";

function ToggleButton({ toggleDarkMode, isDarkMode }) {
  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => toggleDarkMode()}
          checked={isDarkMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
