import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter your email and password."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://hrflow-backend-nf0t.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem(
          "token",
          data.token
        );

        await AsyncStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        Alert.alert(
          "Success",
          "Login Successful"
        );

        router.replace("/dashboard");
      } else {
        Alert.alert(
          "Login Failed",
          data.message || "Invalid Credentials"
        );
      }
    } catch (error) {
      Alert.alert(
        "Network Error",
        "Unable to connect to server."
      );

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <KeyboardAvoidingView
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            marginBottom: 10,
          }}
        >
          Welcome Back
        </Text>

        <Text
          style={{
            color: "gray",
            marginBottom: 30,
          }}
        >
          Continue to your workspace
        </Text>

        <Text
          style={{
            marginBottom: 8,
            fontWeight: "600",
          }}
        >
          Email Address
        </Text>

        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: "#F1F3F5",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            marginBottom: 8,
            fontWeight: "600",
          }}
        >
          Password
        </Text>

        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            backgroundColor: "#F1F3F5",
            padding: 15,
            borderRadius: 10,
          }}
        />

        <TouchableOpacity
          onPress={() =>
            router.push("/reset-password")
          }
          style={{
            alignSelf: "flex-end",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              color: "#3F5AE0",
              fontWeight: "600",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          style={{
            backgroundColor: "#3F5AE0",
            marginTop: 30,
            borderRadius: 10,
            paddingVertical: 16,
            alignItems: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}