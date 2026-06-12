import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const notifications = [
  {
    id: "1",
    title: "Leave Request Approved",
    message:
      "Your annual leave request has been approved by HR.",
    time: "2 mins ago",
    unread: true,
  },
  {
    id: "2",
    title: "Attendance Reminder",
    message:
      "Don't forget to check in before 9:00 AM.",
    time: "10 mins ago",
    unread: true,
  },
  {
    id: "3",
    title: "Payroll Processed",
    message:
      "Your salary for June has been processed successfully.",
    time: "1 hour ago",
    unread: false,
  },
  {
    id: "4",
    title: "Company Announcement",
    message:
      "The monthly staff meeting is scheduled for Friday.",
    time: "Yesterday",
    unread: false,
  },
];

export default function NotificationsScreen() {
  const renderNotification = ({ item }: any) => (
    <TouchableOpacity
      style={{
        backgroundColor: item.unread
          ? "#EEF4FF"
          : "white",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            color: "gray",
            fontSize: 12,
          }}
        >
          {item.time}
        </Text>
      </View>

      <Text
        style={{
          color: "#555",
          lineHeight: 20,
        }}
      >
        {item.message}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            ←
          </Text>

          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 24,
              fontWeight: "700",
              marginRight: 24,
            }}
          >
            Notifications
          </Text>
        </View>

        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            All
          </Text>

          <Text
            style={{
              color: "#3F5AE0",
              fontWeight: "600",
            }}
          >
            Unread (2)
          </Text>

          <Text
            style={{
              color: "#3F5AE0",
              fontWeight: "600",
            }}
          >
            Mark all as read
          </Text>
        </View>

        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotification}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}