import React, { useState } from "react";

import HomeScreen from "./frontend/screens/HomeScreen";
import ProfileScreen from "./frontend/screens/ProfileScreen";
import SettingsScreen from "./frontend/screens/SettingsScreen";
import ContactScreen from "./frontend/screens/ContactScreen";

export default function App() {

  const [screen, setScreen] = useState("home");

  if (screen === "home") {
    return (
      <HomeScreen
        goProfile={() => setScreen("profile")}
        goSettings={() => setScreen("settings")}
        goContact={() => setScreen("contact")}
      />
    );
  }

  if (screen === "profile") {
    return <ProfileScreen goHome={() => setScreen("home")} />;
  }

  if (screen === "settings") {
    return <SettingsScreen goHome={() => setScreen("home")} />;
  }

  if (screen === "contact") {
    return <ContactScreen goHome={() => setScreen("home")} />;
  }

  return null;
}