import { router } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function VerifyOtpScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Image
   source={require("../../assets/logo.png")}
     style={{ 
       width: 200, 
       height: 80,
       alignSelf: "center",
       resizeMode: "contain" }}/>
        </View>
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
          <View>
             <Text 
          style = {{
            marginTop: 50,
            textAlign: 'center',
            fontWeight: "bold",
            fontSize: 14,
            color: "grey"
          }}>
            Resend Code
          </Text>

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
            Continue
            </Text>
          </TouchableOpacity>

          <Text
          style = {{
            marginTop: 90,
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 18,
            color: "blue"

          }}>
            I have a password reset link instead
          </Text>
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