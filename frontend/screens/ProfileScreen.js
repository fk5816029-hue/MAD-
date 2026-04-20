import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/GlobalStyles";

export default function ProfileScreen({ goHome }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}> Profile</Text>

      <Image
        source={require("../../assets/pic1.jpeg")}
        style={styles.profileImage}
      />

      <View style={styles.card}>

        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Your Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          keyboardType="numeric"
          onChangeText={setAge}
        />

        <Text style={styles.liveTitle}>Live Data:</Text>
        <Text style={styles.liveText}>
          Name: {name}, Age: {age}
        </Text>

      </View>

      <TouchableOpacity style={styles.button} onPress={goHome}>
        <Text style={styles.buttonText}> Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
}