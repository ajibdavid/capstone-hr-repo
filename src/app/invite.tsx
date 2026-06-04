import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function InviteScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        
        <View 
        style = {{
            alignItems:"center",
            marginTop: 40
        }}>
           <Image
  source={require("../../assets/logo.png")}
  style={{ 
    width: 200, 
    height: 80,
    resizeMode: "contain" }}
/>    
        </View>
        
        <View
    style={{
      alignItems: "center",
      marginTop: 20,
    }}
  >
    <Image
      source={require("../../assets/pic.png")}
      style={{
        width: 280,
        height: 280,
      }}
      resizeMode="contain"
    />
  </View>
  <View
  style={{
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    marginTop: 40,
    borderRadius: 16,
    padding: 20,
  }}
>
  <Text
    style={{
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
    }}
  >
    Welcome to HRFlow Africa
  </Text>

  <Text
    style={{
      textAlign: "center",
      marginTop: 10,
      color: "#666",
    }}
  >
    Your Organization has invited you to access your employee workspace.
  </Text>
</View>
<TouchableOpacity

  onPress={() => router.push("/setup-account")}

  style={{
    backgroundColor: "#3E5AE8",
    marginHorizontal: 24,
    marginTop: 20,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  }}
>
  <Text
    style={{
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "600",
    }}
  >
    Accept Invitation
  </Text>
</TouchableOpacity>
<Text
  style={{
    textAlign: "center",
    marginTop: 16,
    color: "#666",
  }}
>
  Having Trouble? Contact Support
</Text>
      </ScrollView>
    </SafeAreaView>
  );
}