import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h3>Daily Notes</h3>
      <h5>
        <em>Fast and Simple</em>
      </h5>
      {/* <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="darkmode"
      >
        Dark Mode
      </button> */}
    </div>
  );
};

export default Header;
