import "./App.css";

import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

// function notifyUser(notificationText = "Thank you for enabling notification") {
//   if(!("Notification" in window)) {
//     alert("Browser does not support notifications");
//   } else if (Notification.permission === "granted"){
//     const notification = new Notification(notificationText);
//   } else if (Notification.permission === "denied") {
//     Notification.requestPermission().then(permission) => {
//       if (permission === "granted"){
//         const notification = new Notification(notificationText);
//       }
//     }
//   }
// }

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
