import { router } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ResetPasswordScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 40,
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 180,
              height: 70,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "700",
              marginTop: 10,
            }}
          >
            Reset Password
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: "gray",
              marginTop: 8,
            }}
          >
            Enter your email and employee ID to receive a reset link.
          </Text>

          <Text
            style={{
              marginTop: 30,
              marginBottom: 8,
              fontWeight: "600",
            }}
          >
            Comapny Email Address
          </Text>

          <TextInput
            placeholder="Enter your email address"
            keyboardType="email-address"
            style={{
              backgroundColor: "#F1F3F5",
              borderRadius: 10,
              padding: 15,
            }}
          />

          <Text
            style={{
              marginTop: 20,
              marginBottom: 8,
              fontWeight: "600",
            }}
          >
            Employee ID
          </Text>

          <TextInput
            placeholder="Enter your employee ID (Optional)"
            style={{
              backgroundColor: "#F1F3F5",
              borderRadius: 10,
              padding: 15,
            }}
          />

          <TouchableOpacity   
          
  onPress={() => router.push("/otp")}
            style={{
              backgroundColor: "#3F5AE0",
              marginTop: 40,
              borderRadius: 10,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Send Reset Link
            </Text>
          </TouchableOpacity>
          <Text
           onPress={() => router.push("/login")}
          style = {{
            fontSize: 12,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
            marginTop: 10,

          }}>
            Return to Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}