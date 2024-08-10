import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup.js";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      {/* Here is the button for toggling the popup */}
      <header className="App-header">
        <button onClick={togglePopup}>Show Popup</button>
      </header>
      <Popup show={showPopup} onClose={togglePopup} />
    </div>
  );
}

export default App;
