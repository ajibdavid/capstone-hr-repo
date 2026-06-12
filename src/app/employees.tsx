import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

const employees = [
  {
    id: "1",
    name: "Ojo Joy",
    role: "Backend Developer",
    status: "On Leave",
  },
  {
    id: "2",
    name: "Obaloluwa Ajao",
    role: "Technical Writer",
    status: "Active",
  },
  {
    id: "3",
    name: "John Alex",
    role: "Software Engineer",
    status: "Active",
  },
  {
    id: "4",
    name: "Onifade Adeola",
    role: "Product Designer",
    status: "On Leave",
  },
  {
    id: "5",
    name: "Samuel Goodwill",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: "6",
    name: "Rebecca Karian",
    role: "Sales Executive",
    status: "Active",
  },
];

export default function EmployeesScreen() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || employee.status === filter;

    return matchesSearch && matchesFilter;
  });

  const renderEmployee = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => router.push("/employee-details")}
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 22.5,
            backgroundColor: "#E5E7EB",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            {item.name.charAt(0)}
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              color: "gray",
              marginTop: 4,
            }}
          >
            {item.role}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor:
              item.status === "Active"
                ? "#D1FAE5"
                : "#FEF3C7",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color:
                item.status === "Active"
                  ? "#059669"
                  : "#D97706",
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            {item.status}
          </Text>
        </View>

        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: "gray",
          }}
        >
          ›
        </Text>
      </View>
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
            Employees
          </Text>
        </View>

        {/* Search */}
        <TextInput
          placeholder="Search employees..."
          value={search}
          onChangeText={setSearch}
          style={{
            backgroundColor: "white",
            padding: 14,
            borderRadius: 10,
          }}
        />

        {/* Filter Tabs */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setFilter("All")}
            style={{
              backgroundColor:
                filter === "All"
                  ? "#3F5AE0"
                  : "white",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color:
                  filter === "All"
                    ? "white"
                    : "black",
              }}
            >
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilter("Active")}
            style={{
              backgroundColor:
                filter === "Active"
                  ? "#3F5AE0"
                  : "white",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color:
                  filter === "Active"
                    ? "white"
                    : "black",
              }}
            >
              Active
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFilter("On Leave")}
            style={{
              backgroundColor:
                filter === "On Leave"
                  ? "#3F5AE0"
                  : "white",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color:
                  filter === "On Leave"
                    ? "white"
                    : "black",
              }}
            >
              On Leave
            </Text>
          </TouchableOpacity>
        </View>

        {/* Employee List */}
        <FlatList
          data={filteredEmployees}
          keyExtractor={(item) => item.id}
          renderItem={renderEmployee}
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}