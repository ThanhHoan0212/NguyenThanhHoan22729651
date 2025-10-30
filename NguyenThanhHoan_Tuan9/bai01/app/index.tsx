import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: "#8353E2", fontSize: 20, fontWeight: "bold"}}>MANAGE YOUR TASK</Text>
      <TextInput style={{borderWidth: 1, width: "70%"}} placeholder="Enter your name"/>
      <TouchableOpacity style={{backgroundColor: "#00BDD6"}}
      >
        <Text style={{color: "white", padding: 5}} onPress={() => router.push("/Screen02")}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
