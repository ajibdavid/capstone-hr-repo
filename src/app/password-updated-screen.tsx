import { router } from "expo-router";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PasswordUpdatedSuccessScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
        >
          <Image
            source={require("../../assets/success.png")}
            style={{
              width: 250,
              height: 250,
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Password Updated Successfully
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "gray",
              textAlign: "center",
              marginTop: 10,
              lineHeight: 22,
            }}
          >
            Your password has been updated successfully.
            {"\n"}
            You can now log in with your new password.
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{
              backgroundColor: "#3F5AE0",
              width: "100%",
              paddingVertical: 16,
              borderRadius: 10,
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Back To Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}