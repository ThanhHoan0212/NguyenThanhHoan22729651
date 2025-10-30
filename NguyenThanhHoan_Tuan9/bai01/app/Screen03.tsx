import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { addTodo } from "../db/database";

export default function AddTodoScreen() {
  const router = useRouter();
  const [job, setJob] = useState("");

  const handleAdd = async () => {
    if (job.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập công việc!");
      return;
    }

    try {
      await addTodo(job.trim());
      Alert.alert("Thành công", "Đã thêm công việc!");
      setJob("");
      router.back();
    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Không thể thêm công việc.");
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image
          source={require("../image/Frame.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subtext}>Have a grate day ahead</Text>
        </View>
      </View>

     
      <Text style={styles.title}>ADD YOUR JOB</Text>

      
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="input your job"
          value={job}
          onChangeText={setJob}
        />
      </View>

     
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      
      <Image
        source={require("../image/Image 96.png")}
        style={styles.noteImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    color: "#777",
    fontSize: 13,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  inputWrapper: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  input: {
    height: 45,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00B7F1",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  noteImage: {
    width: 180,
    height: 180,
  },
});
