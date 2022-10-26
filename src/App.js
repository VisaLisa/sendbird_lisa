import React from "react";
import "./App.css";

import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

function showNotification() {
  if ("****" in window) {
    alert();
  }
  const notification = new Notification("Bad word detected", {
    body: "No nasty words here!",
  });
}
console.log(Notification.permission);
if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showNotification();
    }
  });
}

function App() {
  return (
    <div className="App">
      <SendbirdApp
        // Add the two lines below.
        appId="A2DD36A0-3749-49D2-8509-3F8566EEB58A" // Specify your Sendbird application ID.
        userId="leelisa" // Specify your user ID.
      />
    </div>
  );
}

export default App;
