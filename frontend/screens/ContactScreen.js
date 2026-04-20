import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "../styles/GlobalStyles";

export default function ContactScreen({ goHome }) {

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      Alert.alert("Error", "Please enter email");
      return;
    }

    Alert.alert("Submitted", email);
    setEmail(""); // ✅ Clear input after submit
  };

  return (
    <View style={[styles.container, { backgroundColor: "lightgrey" }]}>

      <Text style={styles.title}>Contact</Text>

      {/* Card */}
      <View style={styles.card}>

        <View style={styles.inputRow}>
          <Text style={styles.icon}>📧</Text>

          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="black"
            keyboardType="email-address"
            style={[styles.input, { flex: 1, borderWidth: 0 }]}
            value={email}
            onChangeText={setEmail}
          />
        </View>

      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={[styles.button, { width: "45%" }]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={goHome}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
}