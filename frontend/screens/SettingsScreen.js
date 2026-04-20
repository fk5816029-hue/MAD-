import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { styles } from "../styles/GlobalStyles";

export default function SettingsScreen({ goHome }) {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#4b425f" : "darkgrey"   //  body bg
        }
      ]}
    >

      <Text
        style={[
          styles.title,
          { color: darkMode ? "#ffffff" : "purple" }   //title color
        ]}
      >
        Settings
      </Text>

      {/* Card */}
      <View
        style={{
          width: "90%",
          backgroundColor: darkMode ? "black" : "lightgrey",   // view  bg
          padding: 18,
          borderRadius: 14,
          marginVertical: 20
        }}
      >

        {/* Top row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: darkMode ? "#ffffff" : "black",  //text color
              fontSize: 16
            }}
          >
            🌙 Dark Mode
          </Text>

          <Switch
            value={darkMode}
            onValueChange={() => setDarkMode(!darkMode)}
          />
        </View>

        {/* inner box */}
        <View
          style={{
            marginTop: 16,
            borderWidth: 1,
            borderColor: darkMode ? "darkgrey" : "lightgrey",
            borderRadius: 12,
            padding: 14,
            alignItems: "center",
            backgroundColor: darkMode ? "#4b425f" : "#f2f2f2"  // inner box bg
          }}
        >
          <Text
            style={{
              color: darkMode ? "#ffffff" : "#333333", // inner text color
              marginTop: 6
            }}
          >
            {darkMode ? "Dark Mode Active" : "Light Mode Active"}
          </Text>
        </View>

      </View>

      <TouchableOpacity style={styles.button} onPress={goHome}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
}