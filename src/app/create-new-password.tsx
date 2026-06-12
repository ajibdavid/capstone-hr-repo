import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateNewPasswordScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            Create New Password
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: "gray",
              marginTop: 8,
            }}
          >
            Create a new secure password for your account.
          </Text>

          <Text
            style={{
              marginTop: 30,
              marginBottom: 8,
              fontWeight: "600",
            }}
          >
            New Password
          </Text>

          <TextInput
            placeholder="Enter new password"
            secureTextEntry
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
            Confirm Password
          </Text>

          <TextInput
            placeholder="Confirm password"
            secureTextEntry
            style={{
              backgroundColor: "#F1F3F5",
              borderRadius: 10,
              padding: 15,
            }}
          />

          <TouchableOpacity
          onPress={() => router.push("/password-updated-screen")}
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
              Update Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}