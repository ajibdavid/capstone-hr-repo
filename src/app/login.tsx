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

export default function LoginScreen() {
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
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  }}
>
  Welcome Back, {UserActivation.name}
</Text>
<Text
  style={{
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  }}
>
  Continue to your workspace
</Text>
<Text 
style = {{
    marginTop: 40,
    marginBottom: 8,
    fontWeight:"600"
}}>
  Email address
</Text>
 <TextInput
  placeholder = "Enter email address here"
  keyboardType="email-address"
  style = {{
    borderRadius: 10,
    padding: 15, 
    backgroundColor: "#F1F3F5"
  }}
  />
  <Text
  style={{
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "600",
  }}
>
  Password
</Text>

<TextInput
  placeholder="Enter your password"
  secureTextEntry
  style={{
    backgroundColor: "#F1F3F5",
    borderRadius: 10,
    padding: 15,
  }}
/>
<View
  style={{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
  }}
>
  <Text>
    ☐ Remember Me
  </Text>

  <TouchableOpacity
  onPress={() => router.push("/reset-password")}
>
  <Text
    style={{
      color: "blue",
    }}
  >
    Forgot Password?
  </Text>
</TouchableOpacity>
</View>
<TouchableOpacity
 onPress={() => router.push("/login")}
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
    Login
  </Text>
</TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}