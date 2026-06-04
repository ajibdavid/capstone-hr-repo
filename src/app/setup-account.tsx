
import { router } from "expo-router";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SetupAccountScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>



        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 20,
          }}
        >
          <View>
    <Image
   source={require("../../assets/logo.png")}
     style={{ 
       width: 200, 
       height: 80,
       alignSelf: "center",
       resizeMode: "contain" }}/>
       </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              textAlign: "center"
            }}
          >
            Set Up Your Account
          </Text>
          <Text
  style={{
    marginTop: 30,
    marginBottom: 8,
    fontWeight: "600",
  }}
>
  
</Text>
<Text
  style={{
    marginTop: 30,
    marginBottom: 8,
    fontWeight: "600",
  }}
>
  Full Name
</Text>

<TextInput
  placeholder="Enter your full name"
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
  Email Address
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
  Create Password
</Text>
<TextInput
  placeholder="Enter password"
  secureTextEntry
  style={{
    backgroundColor: "#F1F3F5",
    borderRadius: 10,
    padding: 15,
  }}
/>
<Text
  style={{
    marginTop: 10,
    color: "gray",
    fontSize: 12,
  }}
>
  Create a strong password by following these guidelines:
</Text>

<Text style={{ color: "green", fontSize: 12 }}>
  ✓ At least 8 characters
</Text>

<Text style={{ color: "green", fontSize: 12 }}>
  ✓ Uppercase letters
</Text>

<Text style={{ color: "green", fontSize: 12 }}>
  ✓ Lowercase letters
</Text>

<Text style={{ color: "green", fontSize: 12 }}>
  ✓ At least one number
</Text>
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
  placeholder="Re-enter your password"
  secureTextEntry
  style={{
    backgroundColor: "#F1F3F5",
    borderRadius: 10,
    padding: 15,
  }}
/>
<TouchableOpacity
onPress={() => router.push("/success")}
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
      fontWeight: "600",
      fontSize: 16,
    }}
  >
    Finish Setup
  </Text>
</TouchableOpacity>


          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}