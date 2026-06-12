import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function VerifyOtpScreen() {
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
            Verify OTP
          </Text>

          <Text
            style={{
              textAlign: "center",
              color: "gray",
              marginTop: 8,
            }}
          >
            Enter the 6-digit code sent to your email.
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 40,
            }}
          >
            <TextInput style={boxStyle} maxLength={1} />
            <TextInput style={boxStyle} maxLength={1} />
            <TextInput style={boxStyle} maxLength={1} />
            <TextInput style={boxStyle} maxLength={1} />
            <TextInput style={boxStyle} maxLength={1} />
            <TextInput style={boxStyle} maxLength={1} />
          </View>

          <TouchableOpacity
           onPress={() => router.push("/create-new-password")}
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
              Verify Code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const boxStyle = {
  width: 45,
  height: 55,
  borderWidth: 1,
  borderColor: "#D1D5DB",
  borderRadius: 10,
  textAlign: "center" as const,
  fontSize: 20,
};