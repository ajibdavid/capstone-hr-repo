import { router } from "expo-router";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountSuccessScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 24,
            paddingTop: 80,
          }}
        >
          <Text
            style={{
              fontSize: 100,
            }}
          >
            ✅
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 22,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Account Created Successfully
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/dashboard")}
            style={{
              backgroundColor: "#3F5AE0",
              marginTop: 60,
              width: "100%",
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
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}