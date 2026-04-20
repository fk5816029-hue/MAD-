import React from "react";
import { Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../styles/GlobalStyles";

export default function HomeScreen({ goProfile, goSettings, goContact }) {

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      }}
      style={styles.container}
    >

      <Text style={styles.title}>Student App</Text>

      <TouchableOpacity style={styles.button} onPress={goProfile}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goSettings}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goContact}>
        <Text style={styles.buttonText}>Go to Contact</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}